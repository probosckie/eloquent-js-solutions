/*
Given an array of share selling prices on consecutive days - 
find the days on which we should buy and then sell to make the maximum profit. 

Try to use smallest time complexity
*/


var prices = [1,3,4,3,89,2,15,7,8,9,2,3];

/* brute force */

let buyIndex = 0; sellIndex = 1;
let maxDiff = -Infinity;

for (let i = 0; i < prices.length - 1; i++){
	for(let j = i + 1; j < prices.length; j++){
		if((prices[j] - prices[i]) > maxDiff){
			buyIndex = i;
			sellIndex = j;
		}
	}
}

console.log(`Gonna buy on ${buyIndex} and sell on ${sellIndex}`);
console.log(`Gonna buy at ${prices[buyIndex]} and sell at ${prices[sellIndex]}`);
