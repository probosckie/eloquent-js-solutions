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
