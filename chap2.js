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

/*
Chessboard
Write a program that creates a string that represents an n×n grid like
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/



function createChessPattern(character, gridValue){
	character = character || '#';
	gridValue = gridValue || 8;

	let final = '', currentLine = 0;

	for (let i = 1; i <= gridValue*gridValue; i++){
		if((currentLine + i) % 2 === 0){
			final = final + ' ';
		} else {
			final = final + character;
		}

		if(i % gridValue === 0){
			final = final + '\n';
			currentLine += 1;
		}
	}
	return final
}

