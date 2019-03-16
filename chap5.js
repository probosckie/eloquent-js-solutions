/*
Can we abstract “doing something N times” as a function?
*/

function doSomething(action, n){
  for(let i=0; i<n; i++){
    action(i);
  }
}
