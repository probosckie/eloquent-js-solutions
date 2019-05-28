class InputError extends Error {

}



function promptDirection(str){
	let x = prompt(str);
	if(x == 'left') 
		return 'L';
	else if(x == 'right') 
		return 'R';
	else
		throw new InputError('Invalid Direction');
}


try{
	promptDirection();
}

catch(e){
	if(e instanceof InputError){
		console.log('Exception caused due to wrong value of input');
	} else {
		throw e;
	}
}

function look(){
	if(promptDirection() === 'L'){
		return 'a house'
	} else
		return '2 angry bears';
}

try{
	look();
}
catch(e){
	console.log('wierd things happened');
	console.log(e);
}






let errorCount = 0;
for(;;){
	try {
		let dir = promtDirection('Where??');
		console.log('you entered ' + dir);
		break;
	} 
	catch(e) {
		errorCount++
		console.log('Not a valid direction');
		console.log(typeof e);
		console.log(Object.keys(e));
	}
	if(errorCount > 10)
		break;
}



/*
Simulating a Locked Box
*/


const box = {
	locked: true,
	unlock(){ this.locked = false; },
	lock(){ this.locked = true; },
	_content: [],
	get content(){
		if(this.locked)
			throw new Error('Locked!')
		else
			return this._content;
	}
}


/*
Write a function called withBoxUnlocked that takes a function value as argument,
unlocks the box, runs the function, and then ensures that the box
is locked again before returning, regardless of whether the argument function
returned normally or threw an exception.

For extra points, make sure that if you call withBoxUnlocked when the box
is already unlocked, the box stays unlocked.

*/


function withBoxUnlocked(fn){
	let initialLocked = box.locked;

	if(initialLocked)
		box.unlock();
	try{
		fn(box._content);
	}
	catch(e){
		console.log(e);
	}
	finally {
		if(initialLocked)
			box.lock();
	}
}
