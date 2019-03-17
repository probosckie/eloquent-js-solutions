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

/*
The prototype object used when constructing objects is found by taking the
prototype property of the constructor function. Inside the constructor, this refers to the prototype object
*/

function Rabbit(type){
  this.type = type;
}

Rabbit.prototype.speak = function(line){
  console.log(`The rabbit of type: ${this.type} says ${line}`);
}

const wierdRabbit = new Rabbit('Wierd');


/*
Distinction between the way a prototype is associated with a constructor (through its prototype property) and the way
objects have a prototype (which can be found with Object.getPrototypeOf)
*/

console.log(Object.getPrototypeOf(Rabbit) === Function.prototype);

console.log(Object.getPrototypeOf(wierdRabbit) === Rabbit.prototype)


/* 
Class notation to create objects
*/
class Dog {
 constructor(type){
   this.type = type;
 }
 bark(){
   console.log('dog says woof woof');
 }
}

const pluto = new Dog('White');

/*
using plain objects as maps is dangerous. There are several possible
ways to avoid this problem. First, it is possible to create objects with no
prototype. If you pass null to Object.create, the resulting object will not
derive from Object.prototype and can safely be used as a map.
*/

console.log("toString" in Object.create(null));


/*
symbols used as unique property names
*/

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function(){
  console.log(`${this.length} cm of blue yarn`);
}

console.log([1,2,3].toString());
console.log([1,2,3][toStringSymbol]());


/*
Map in built object type
*/

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));

/*
properties that are accessed directly may hide a method call. Such methods are called getters, and they are defined by writing 
get in front of the method name in an object expression or class declaration
*/

const x = {
  x:1, 
  get getX(){return this.x}
}

/*
setters, getters and static method in a single example
*/

class Temperature{
  constructor(celsius){
    this.celsius = celsius;
  }
  
  get farenheit(){
     return this.celsius * 1.8 + 32;
  }
  
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  
  static fromFarenheit(f){
    return new Temperature((f - 32) / 1.8);
  }
}

/*
Write a class Vec that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name.
Give the Vec prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

class Vec {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  plus(v){
    return new Vec(this.x + v.x, this.y + v.y);
  }
  
  minus(v){
    return new Vec(this.x - v.x, this.y - v.y);
  }
  
  get length(){
     return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}




