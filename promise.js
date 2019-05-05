
/*
Write a functiond delay that takes in time and performs something in the then callback after the required amount of time. 
If the time parameter is not a number - it should get rejected with appropriate error object
*/

function delay(time){
  return new Promise((resolve, reject) => {
	if(isNaN(time))
      reject(new Error(time + ' is not a valid number'));
    setTimeout(resolve, time);
  })
}




