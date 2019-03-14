
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


/*Write a function to find the minimum of 2 args*/

function minimum(a,b){
  return a < b ? a : b;
}


/*
Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?
*/

function isEven(n){
  if(n < 0)
    n = -n;
  
  if(n == 0)
    return true;
  if (n == 1)
    return false;
  
  else if (n > 1)
    return isEven(n-2);  
}


/*
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.
*/

function countChars(str, character){
  let counter = 0;
  for(let i=0; i < str.length; i++){
    if(str[i] === character)
      counter++;
  }
  return counter;
}

function countBs(str){
  return countChars(str, 'B')
}


