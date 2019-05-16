
/*
The following function scans a document for text nodes containing a given string and returns true when it has found one:
*/

function findMatchingTextNode(seed, str){
	if(seed.nodeType === 1){
		for(let i = 0; i < seed.childNodes.length; i++){
			if(findMatchingTextNode(seed.childNodes[i], str))
				return true;
		}
		return false;
	} else if (seed.nodeType === 3){
		return seed.nodeValue.indexOf(str) > -1;
	}
}


/*
Write a function to replace all images by text nodes containing their src attribute
*/

function replaceImages(root){
	let child = root.getElementsByTagName('img');
	for(let i = child.length - 1; i >= 0; i--) {
		let image = child[i];
		let textNode = document.createTextNode(image.alt);
		root.replaceChild(textNode, image);
	}
}


let root = document.getElementsByClassName('flowerContainer');


replaceImages(root[0]);


/*
utility elt, which creates an element node
and treats the rest of its arguments as children to that node
*/
function elt(type,...children){
	let element = document.createElement(type);
	for(let child of children){
		if(typeof child !== 'string' && typeof child !== 'number')
			element.appendChild(child)
		else
			element.appendChild(document.createTextNode(child));
	}
	return element;
}




document.getElementById("quote").appendChild(
    elt(
      "footer",
      "-",
      elt("strong", "Karl Popper"),
      ", preface to the second editon of ",
      elt("em", "The Open Society and Its Enemies"),
      ", 1950"
    )
  );


function timeTaken(name, action){
	let start = Date.now();
	action();
	console.log(`${name} took ${Date.now() - start} ms`);
}

timeTaken('dumb approach to fill spans with chars', () => {
	let root = document.body.getElementsByClassName('one')[0];
	while(root.offsetWidth < 2000) {
		root.appendChild(document.createTextNode('X'));
	}
});



timeTaken('clever approach', () => {
	let root = document.body.getElementsByClassName('two')[0];
	root.appendChild(document.createTextNode('X'));
	let times = Math.ceil(2000 / root.offsetWidth);
	root.firstChild.nodeValue = "X".repeat(times);
});


let cat = document.querySelector(".cat");

let radius = 100, angle = 1, radian, x, y;

//1st approach
let timeI = setInterval(function() {
	radian = (angle / 180) * Math.PI;
	x = 300 + Math.ceil(radius * Math.cos(radian));
	y = 300 + Math.ceil(radius * Math.sin(radian));
	cat.style.left = (x + 'px');
	cat.style.top = (y + 'px');

	if(angle === 359){
		clearInterval(timeI);
	}
	else 
		angle++;
}, 30);


//2nd approach
angle = 1;

function animate(angle){
	radian = (angle / 180) * Math.PI;
	x = 300 + Math.ceil(radius * Math.cos(radian));
	y = 300 + Math.ceil(radius * Math.sin(radian));
	cat.style.left = (x + 'px');
	cat.style.top = (y + 'px');

	if(angle !== 360) {
		angle++;
	}
	requestAnimationFrame(() => animate(angle))
}

requestAnimationFrame(() => animate(angle));


//3rd approach
let angle = Math.PI / 2;
function animate(time, lastTime) {
	console.log(time);
	console.log(lastTime);
  if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
  }
  cat.style.top = Math.sin(angle) * 20 + "px";
  cat.style.left = Math.cos(angle) * 200 + "px";
  requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);


/*
Given a data set of mountains, an array of objects with name, height, and
place properties, generate the DOM structure for a table that enumerates the
objects. It should have one column per key and one row per object, plus a
header row with <th> elements at the top, listing the column names
*/

function createtable(arr){
	let table = document.createElement('table');
	let headers = elt('TR',elt('TH','name'), elt('TH','height'), elt('TH','place'));
	table.appendChild(headers);

	let data = elt('TR',elt('TD',arr[0].name), elt('TD',arr[0].height), elt('TD',arr[0].place));

	function buildDataRow({ name, place, height }){
		return elt('TR',elt('TD',name), elt('TD',height), elt('TD',place));
	}

	arr.forEach(v => {
		let data = buildDataRow(v);
		table.appendChild(data);
	})

	document.body.querySelector('#mountains').appendChild(table);
}

function alignHeightRight(table){
	let list = table.querySelectorAll('td');
	for(let i = 0; i < list.length; i++){
	let content = list[i].nodeValue;
    if(!isNaN(content)){
       list[i].style.textAlign = 'right';
    }
  }  
}


function getElementsByTagName(node, tagName) {
	let collector = [];
	function traverseCollect(n){
		if(n.nodeType === 1) {
			if(n.nodeName.toLowerCase() === tagName)
				collector.push(n);
			let childs = n.children;
			for(let i = 0; i < childs.length; i++){
				traverseCollect(childs[i]);
			}
		}
	}
	traverseCollect(node);
	return collector;
}
