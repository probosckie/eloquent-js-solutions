/*
This file contains all the code for weresquirrel example in this book. Althogh the code is directly present in the book - 
for better understanding, I am trying to write the functions by myself
*/

function phi(table){
  let n11 = table[3], n00 = table[0], n01 = table[1], n10 = table[2];
  let n1$ = n11 + n10;
  let n0$ = n01 + n00;
  let n$1 = n01 + n11;
  let n$0 = n10 + n00;
  
  return (n11*n00 - n01*n10) / Math.sqrt(n1$*n$1*n0$*n$0);
}
