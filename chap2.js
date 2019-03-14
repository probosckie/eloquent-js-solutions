/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######

Answer:
*/

/*Attempt 1*/
for (let i = 0; i<7; i++){
 let j = '';
 for (let k = 0; k < i+1; k++){
   j += '#' 
 }
 j += '\n';
 console.log(j); 
}

/*Attempt 2*/

var acc = '', total = (7 * (7+1))/2 ;
let target = 1, rowsCount = 1;
for (let i = 1; i <= total; i++){
  acc = acc + '#';
  if( i === target){
     acc = acc + '\n';
     rowsCount++;  
     target = target + rowsCount;
  }
}
