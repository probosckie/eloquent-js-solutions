
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



/*Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth, which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.*/

function arrayToList(a){
  let list = {}, newNode;
  for(let i = a.length - 1; i >= 0; i--){
    if(!newNode){
      newNode = {
        value : a[i],
        rest: null
      };  
    } else {
      list = {
         value: a[i],
         rest: newNode
      };
      newNode = list;
    }
  }
  return list;
}


function listToArray(list){
  const arr = [];
  while(list){
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}


function prepend(list, n){
  return {value:n, rest:list};
}

function nth(list, index){
  if(!list)
    return undefined;
  if(index === 0 ){
    if(list && list.value)
      return list.value;
  } else
    return nth(list.rest,index-1);
}


/*
Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties
of objects to compare them.
*/


function deepEqual(v1,v2){
  if(typeof v1 !== typeof v2)
    return false;
  else {
    if(typeof v1 !== 'object' || (v1 == null || v2 == null))
      return v1 === v2;
    else {
      if(Object.keys(v1).length !== Object.keys(v2).length)
        return false;
      else {
        let i, isSame = true;
        for(i in v1){
          if(!(i in v2))
            return false;
          else 
            isSame = isSame & deepEqual(v1[i],v2[i]);
        }
        return !!isSame;
      }
    }
  }
}
