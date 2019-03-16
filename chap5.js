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
