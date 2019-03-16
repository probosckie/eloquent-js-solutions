
/* Write a function that takes an
array and an index, and it returns a new array that is a copy of the original
array with the element at the given index removed.*/

function removeItem(arr, index){
  var newRemoved = arr.slice(0,index);
  var rest = arr.slice(index+1);
  return newRemoved.concat(rest);
}

/*Write a function to print the maximum of any given numbers*/

function maximum(...numbers){
  let i, max = -Infinity;
  for(let i of numbers){
    if(i > max)
      max = i;
  }
  return max;
}
