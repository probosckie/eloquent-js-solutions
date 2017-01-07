/*function greaterThanN(n) {
	return function(m) { return m > n}
}

var greaterThan12 = greaterThanN(12);
console.log('13 is greater than 12 '+ greaterThan12(13));
*/

function forEach2(array, action){
	for (var i=0; i<array.length; i++) {
		action(array[i]);
	}
}

/*unless is same as except if or if some condition is false then do something*/
function unless(test, then) {
	if(!test)
		then();
}

function repeat(f,times) {
	for(var i=0;i<times;i++)
		f(i);
}

/*repeat(function(i){
	unless(i%2, function(){console.log(i)});
},20);
*/


function noisy(f){
	return function(arg) { 
		//console.log('calling '+ f.toString() +' with argument '+ arg);
		console.log('arguments object passed to the inner function is ');
		console.log(arguments);
		f(arg);
	}
}


function reduce2(arr,start,combine){
	var i,hold = start;
	for (i=0;i<arr.length;i++){
		hold = combine(hold,arr[i]);
	}
	return hold;
}

//noisy(Boolean)(0,2,3,4,"faskfhskjdhf");

function transparetWrapping(g){
	return function(){
		return g.apply(null,arguments);
	}
}

var ancestry = JSON.parse(ANCESTRY_FILE);

//find the average male age
console.log(ancestry.filter(function(e){return e.sex==='m'}).map(function(e){
	return e.died - e.born}).reduce(function(x,y){return x+y}) / 21);



//find out if Philibert Haverbeke shares direct ancestry with the oldest person of the group Pauwels van Haverbeke

var byName = {}; 
ancestry.forEach(function(e){
	byName[e.name] = e
});

var root = "Philibert Haverbeke", numberOfGenerations=0;

function findOldest(curr) {
	if(!(byName[curr].father in byName))
		return byName[curr];
	else {
		numberOfGenerations++;
		return findOldest(byName[curr].father);
	}
}

/*This is a really helpful piece of code to recursively consume an inverse binary tree*/
/*use it with any value of function f*/
function reduceAncestors(person, f, defaultValue) {
	function valueFor(p) {
		if(p==null)
			return defaultValue;
		else 
			return f(p,valueFor(byName[p.father]),valueFor(byName[p.mother])); 
	}
	return valueFor(person);
}

function shareDna(person,dad,mom) {
	if(person.name == 'Pauwels van Haverbeke')
		return 1;
	else 
		return (dad+mom)/2;
}

var per = byName[root];

console.log("amount of dna shared is "+reduceAncestors(per,shareDna,0)/4);


var theSet =  ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set, person) {
	console.log(set);
	return set.indexOf(person.name) !== -1;
}


/*Exercises*/

var ddArray = [[1,2],[3,4],[5,6]];
var combined = ddArray.reduce(function(x,y){return x.concat(y);});



function averageArray(arr){
	function plus(x,y) {
		return x+y;
	}
	return (arr.reduce(plus) / arr.length);
}

var ageDiff = ancestry.filter(function(p){
 return (p.mother in byName)
}).map(function(p){
return p.born - byName[p.mother].born
});

console.log("the average age difference between mother and children is "+ averageArray(ageDiff));


var agesCount = {},x;
ancestry.forEach(function(p){
	var century = Math.ceil(p.died/100);
	if(!(century in agesCount)){
		agesCount[century] = [];
		agesCount[century].push(p.died - p.born);
	}
	else {
		agesCount[century].push(p.died - p.born)
	}
});

for (x in agesCount) {
   console.log(x+": "+average(agesCount[x]));
}

function groupBy(arr,groupFunc){
	var v = {};
	arr.forEach(function(el){
		if(v[groupFunc(el)])
			v[groupFunc(el)].push(el);
		else {
			v[groupFunc(el)]=[];
			v[groupFunc(el)].push(el);

		}
	});
	return v;
}

function every(arr,func) {
	var init = true;
	arr.forEach(function(x){
		if(!cond(x))
			init = false;
	});
	return init;
}

function some(arr,func){
	var i;
	for (i=0;i<arr.length;i++){
		if(func(arr[i]))
			return true;
	}
	return false;
}




























