
/*
by starting from the number 1 and repeatedly either
adding 5 or multiplying by 3, an infinite set of numbers can be produced. How
would you write a function that, given a number, tries to find a sequence of
such additions and multiplications that produces that number?
*/

function findInnerPattern(n,str, target){
  if(n === target)
    return str;
  else if(n > target)
    return false;
  else {
    return (findInnerPattern(n+5, '('+str+')+5', target) || findInnerPattern(n*3, '('+str+')*3', target));
  }  
}


function findPattern(n){
  //do something
  const result = findInnerPattern(1,'1', n);
  return result || 'Pattern could not be found';
  
}

findPattern(13);
