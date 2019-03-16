
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



/*
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/


function range(start, end, step){
  let store = [], x = start, direction = (start < end) ? 'positive' : 'negative';
  while(true){
    if(direction === 'positive' && x > end)
      break;
    if(direction === 'negative' && x < end)
      break;
    
    store.push(x);
    x += step;
  }
  return store;
}

function sum(f){
  return f.reduce(function(a,b){return a+b});
}


/*
write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements.
*/

function reverseArray(a){
  let b = [];
  for(let i = 0; i< a.length; i++){
    b[i] = a[a.length - i - 1];
  }
  return b;
}

function reverseArrayInPlace(a){
  let temp;
  for(let i = 0; i < Math.floor(a.length/2); i++){
     console.log(`replace ${i} with ${a.length - i - 1}`);
     temp = a[i];
     a[i] = a[a.length - i - 1];
     a[a.length - i - 1] = temp;
  }
}




