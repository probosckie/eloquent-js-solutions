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
   let result = f(args);
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




