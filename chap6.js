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

/*
The standard JavaScript environment provides another data structure called
Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it
does not associate other values with those—it just tracks which values are part
of the set. A value can be part of a set only once—adding it again doesn’t have
any effect.
Write a class called Group (since Set is already taken). Like Set, it has add,
delete, and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.
Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.
Give the class a static from method that takes an iterable object as argument
and creates a group that contains all the values produced by iterating over it.
*/

class Group {
  constructor(){
    this.bucket = [];
  }
  add(x){
    if(!this.bucket.includes(x))
      this.bucket.push(x);
  }
  
  delete(x){
    let index = this.bucket.indexOf(x);
    if(index !== -1){
      this.bucket.splice(index, 1);
    }
  }
  
  has(x){
    return this.bucket.includes(x);
  }
  
  static from(iter){
    const y = new Group();
    for(let i of iter){
       y.add(i);
    }
    return y;
  }
}

/*
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified during
iteration.
*/


class GroupIterator {
  constructor(group){
    this.currentIndex = 0;
    this.group = group;
  }
  next(){
    if(this.currentIndex === this.group.bucket.length)
      return {done: true};
    else {
      let value = {
        value: this.group.bucket[this.currentIndex]
      };
      this.currentIndex++;
      return {
        value,
        done: false
      }
    }
  }
}

Group.prototype[Symbol.iterator] = function(){
  return new GroupIterator(this);
}



/*
build a matrix class that can store elements - then build a MatrixIterator to make matrix objects iterable

properties: width, height, get, set
*/

//2d implementation 
class Matrix {
  constructor(width, height, element = (x,y) => undefined){
    this.m = new Array(height);
    for(let i = 0; i < this.m.length; i++){
      this.m[i] = new Array(width);
      for(let j = 0; j < this.m[i].length; j++){
        this.m[i][j] = element(j,i);
      }
    }
  }
}

//1d implementation
class Matrix {
  constructor(width, height, element = (x,y) => undefined){
    this.width = width;
    this.height = height;
    this.content = [];
    for(let i = 0; i < height; i++){
      for(let j = 0; j < width; j++){
        this.content.push(element(j,i));
      }
    }
  }

  get(x,y){
    return this.content[y * this.width + x];
  }

  set(x, y, value){
    this.content[this.width * y + x] = value;
  }
}


class MatrixIterator {
  constructor(matrix){
    this.matrix = matrix;
    this.x = 0;
    this.y = 0;
  }

  next(){
    if(this.y === this.matrix.height){
      return {
        value: undefined,
        done: true
      }
    } 
    let value = {
      value: this.matrix.get(this.x,this.y),
      done: false
    };
    this.x++;
    if(this.x === this.matrix.width){
      this.x = 0;
      this.y++
    }
    return value;
  }
}


//this is how we added the function returning the object implementing next - and passed the actual matrix to it.
Matrix.prototype[Symbol.iterator] = function(){
  return new MatrixIterator(this);
}









