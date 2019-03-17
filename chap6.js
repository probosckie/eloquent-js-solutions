/*
Writing a method on object which uses this and input params
*/

function speak(line){
  console.log(`The rabbit of type ${this.type} speaks ${line}`);
}

const whiteRabbit = {type:'white', speak};
