/*
Given an array of share selling prices on consecutive days - 
find the days on which we should buy and then sell to make the maximum profit. 

Try to use smallest time complexity
*/


var prices = [1,3,4,3,89,2,15,7,8,9,2,3];

/* brute force */

let buyIndex, sellIndex;
let maxDiff = -Infinity;

for (let i = 0; i < prices.length - 1; i++){
	for(let j = i + 1; j < prices.length; j++){
		if((prices[j] - prices[i]) > maxDiff){
			maxDiff = prices[j] - prices[i];
			buyIndex = i;
			sellIndex = j;
		}
	}
}

console.log(`Gonna buy on ${buyIndex} and sell on ${sellIndex}`);
console.log(`Gonna buy at ${prices[buyIndex]} and sell at ${prices[sellIndex]}`);

/* To understand divide and conquer, we will first write mergesort */

let arr = [1,3,4,1,22,89,-1,0];

function mergeSort(a){
	function sortAndMerge(a1,a2){
    let newA = [];
    a1 = !!a1 ? a1.slice() : [];
    a2 = !!a2 ? a2.slice() : [];
    while(a1.length + a2.length){
      if(a1.length && (!a2.length || a1[0] <= a2[0])){
        newA.push(a1.shift());
      }
      if(a2.length && (!a1.length || a2[0] <= a1[0])){
        newA.push(a2.shift())
      }	
    }
	return newA;
	}
	
	function divide(arr){
		if(arr.length > 1){
			let arr1 = arr.slice(0, arr.length/2);
			let arr2 = arr.slice(arr.length/2, arr.length);
			return sortAndMerge(divide(arr1), divide(arr2));
		}
		if(arr.length === 1){
			return arr;
		}
	}
	return divide(a);
}

mergeSort(arr);
