/*
Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    function rangeSum(a, i, j){
    		if(i == -1 || j == -1)
    			return 0;
    		if(j === a.length)
    			return 0;

        let sum = 0;
        for(let k = i; k <= j; k++)
            sum += a[k];
        return sum;
    }
    if(nums.length === 0)
    	return -1;

    let i, pivotIndex = 0, pivotFound = false, sumLeft, sumRight;
    for(i = 0; i < (nums.length); i++){
      sumLeft = rangeSum(nums, 0, pivotIndex - 1);
      sumRight = rangeSum (nums, pivotIndex + 1, nums.length - 1);
      if(sumLeft === sumRight){
      	pivotFound = true;
      	break;
      }
      pivotIndex++;
    }
    
    if(pivotFound)
        return pivotIndex;
    return -1; 
};
