function createMatrix(n,val){
	let a = new Array(n);
	a.fill(1);
	a.forEach((v,i) => {
		a[i] = new Array(n);
    a[i].fill(val);
	});
	return a;
}

function fillMatrix(a,n){
	let direction = 'right', row = 0, col = 0;
	for(i = 0; i < n*n; i++){
    console.log(`row is now ${row} and col = ${col}`);
	  a[row][col]= i+1;
    //console.table(a);
	  switch(direction){
      case 'right':{
        if(row === n - 1 || a[row + 1][col]){
        	direction = 'down';
        	col = col + 1;
        } else {
         	row = row + 1;
        }
        break;
      }

      case 'down':{
        if(col === n - 1 || a[row][col + 1]){
        	direction = 'left';
        	row = row - 1;
        } else {
         	col = col + 1;
        }
        break;
      }

      case 'left':{
        if(row === 0 || a[row - 1][col]){
        	direction = 'up';
        	col = col - 1;
        } else {
         	row = row - 1;
        }
        break;
      }

      case 'up':{
        if(col === 0 || a[row][col - 1]){
        	direction = 'right';
        	row = row + 1;
        } else {
         	col = col - 1;
        }
        break;
      }
	  }
	}
}
