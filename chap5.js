/*
Can we abstract “doing something N times” as a function?
*/

function doSomething(action, n){
  for(let i=0; i<n; i++){
    action(i);
  }
}

function greaterThan(n){
  return (m) => m > n;
}

function noisy(f){
 return function(...args){
   console.log('called with '+ args);
   let result = f(...args);
   console.log('result is ' + result);
 }
}

/*Writing polyfill of reduce*/

function reduce(array, combine, start){
  let current = start;
  for(let i of array){
    current = combine(current,i);
  }
  
  return current;
}

/*
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.
*/

function flatten(arr){
  return arr.reduce((v,i) => {
    if(Array.isArray(i)){
       return v.concat(flatten(i))
    } else {
      return v.concat(i);
    }
  }, [])
}

/*
Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.
*/


function loop(v,test,update,body){
  let current = v;
  while(test(current)){
    body(current);
    current = update(current);
  }
}


/*
Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.
*/

function every(arr, test){
  return arr.reduce((v,i) => v && test(i))
}

function every(arr, fn){
  return !arr.some(v => !fn(v))
}


