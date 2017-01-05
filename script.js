var journal = [];

function addEntry(event, didISquirrel) {
	journal.push({events:event, squirrel: didISquirrel});
}

/*addEntry(["carrot","exercise","weekend"], false);
addEntry(["bread","pudding","brushed teeth","weekend","touched tree"],false);
addEntry(["spaghetti","peanuts","computer","weekend"],true);*/

journal = JOURNAL;

function checkInArray(a,e) {
	return a.indexOf(e) !== -1;
}

function tableFor(event, journal) {
	journal = journal || window.journal;
	var arr = [0,0,0,0],index;
	journal.forEach(function(v) {
		index=0;
		if(checkInArray(v.events,event)) {
			if(v.squirrel)
				index=3;
			else
				index=2;
		}
		else {
			if(v.squirrel)
				index =1
		}
		arr[index] += 1;
	});
	return arr;
}

function phi(t) {
	return ((t[3]*t[0] - t[1]*t[2])/(Math.sqrt((t[2]+t[3])*(t[0]+t[1])*(t[1]+t[3])*(t[0]+t[2]))));
}

var map = {};

function gatherCorrelations() {
	var i;
	journal.forEach(function(v) {
		for(i=0; i < v.events.length; i++) {
			if(!(v.events[i] in map)) {
				map[v.events[i]] = phi(tableFor(v.events[i])); 
			}
		}
	});
}

gatherCorrelations();

for (i in map){
 if (Math.abs(map[i]) >= 0.1) 
 	console.log(i +" " + map[i])
}

/*Exercises*/
function range(start,end,step) {
	var arr = [], unit = (start < end)?1:-1, stayInLoop;
	step = step || unit;
	stayInLoop = (step>0)?(start<=end):(start>=end);
	while(stayInLoop) {
		arr.push(start);
		start = start + step;
		stayInLoop = (step>0)?(start<=end):(start>=end);
	}
	return arr;
}

function swapByReference(a,x,y) {
	var temp;
	temp = a[x];
	a[x] = a[y];
	a[y] = temp;
}

function reverse2(arr) {
	var c = [];
	for(var i = arr.length-1; i>=0; i--)
		c[c.length] = arr[i];
	return c;
}

function reverseInPlace(a) {
	var i,len = a.length - 1;
	for(i=0; i<(len/2);i++) {
		swapByReference(a,i,len-i);
	}
}

function arrayToList(arr) {
	var len = arr.length,i = len-1,current;
	var core = null;
	while (i>=0) {
		current = arr[i];
		core = {value:current, rest:core}
		i--;
	}
	return core;
}

function listToArray(list) {
	var arr = [list.value];
	while(list.rest) {
		list=list.rest;
		arr.push(list.value);
	}
	return arr;
}

function prepend(ele,list) {
	return {value:ele, rest:list};
}

function nth(list,index) {
	return listToArray(list)[index];
}

function nthRecur(list, index) {
	if(index === 0)
		return list.value;
	else if(list === null)
		return undefined;
	else 
		return nth(list.rest, index-1);
}


function deepComparison(v1,v2) {
	var tv1 = typeof v1;
	var tv2 = typeof v2;
	var x,flag=true;
	if (v1 === v2)
		return true;
	else {
		if(tv1 === tv2) {
			if(v1 === null || v2 === null) /*one is null and other is object*/ 
				return false;
			/*both are primitive*/
			if(tv1 !== 'object' && tv2 !== 'object')
				return false;
			else {
				/*both are objects*/
				for(x in v1) {
					if(!(x in v2))
						return false;
					else{
						flag = deepComparison(v1[x],v2[x]);
					}
				}
				return flag;
			}
		}
		else /*types of both are different which means that they are different*/
			return false;
	}
}

