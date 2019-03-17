/*
Let’s implement an iterable data structure. We’ll build a matrix class, acting
as a two-dimensional array.
*/

class Matrix {
  constructor(width, height, element = (x,y) => undefined){
    this.width = width;
    this.height = height;
    this.content = [];
    
    for(let i = 0; i < height; i++){
      for(let j = 0; j < width; j++){
        this.content[i * width  + j] = element(i,j); 
      }
    }
    
  }
  
  get(x,y){
    return this.content[y * this.width + x];
  }
  
  set(x,y,value){
    this.content[this.width*y + x] = value;
  }
}


class MatrixIterator {
  constructor(matrix){
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  
  next(){
    if(this.y == this.matrix.height)
      return {done:true};
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x,this.y)
    }
    this.x++;
    if(this.x == this.matrix.width){
      this.x = 0;
      this.y++;
    }
    return {
      value, done: false
    };
  }
}

Matrix.prototype[Symbol.iterator] = function(){
  return new MatrixIterator(this);
}

let matrix = new Matrix(2,2, (x,y) => `Value ${x} ${y}`);


