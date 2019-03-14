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

for (let i = 0; i<7; i++){
 let j = '';
 for (let k = 0; k < i+1; k++){
   j += '#' 
 }
 j += '\n';
 console.log(j); 
}
