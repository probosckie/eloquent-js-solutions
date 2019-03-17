/*
Writing a method on object which uses this and input params
*/

function speak(line){
  console.log(`The rabbit of type ${this.type} speaks ${line}`);
}

const whiteRabbit = {type:'white', speak};

/*
Passing explicit value of this via call
*/

speak.call(whiteRabbit, 'Something in the way she moves');

/*
Arrow functions are different—they do not bind their own this but can see
the this binding of the scope around them. Thus, you can do something like
the following code, which references this from inside a local function:
*/

function normalize(){
  console.log(`Normalized co-ordinates ${this.coords.map(v => v/this.length)}`);
}

normalize.call({coords:[0,2,3], length:5})

/*
Object.getPrototypeOf method gives prototype of a given object, 
Object.prototype is the root ancestral object of the empty object sitting at the top of the chain
*/

Object.getPrototypeOf({}) === Object.prototype

/*
You can use Object.create to create an object with a specific prototype
*/

const x = {a:1}
const y = Object.create(x);
y.newProp = 34;

y.a //will give 1

/*
Shorthand to create methods inside objects
*/

const a = {
  tellMe(line){
    console.log(line)
  }
};

a.tellMe('Something in the way she moves');

