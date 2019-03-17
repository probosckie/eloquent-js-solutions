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
}
