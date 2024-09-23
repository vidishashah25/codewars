function moveZeros(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
     if (arr[i] === 0) {
       arr.push(arr.splice(i, 1).pop());
     }
   }
   return arr;
 }

 console.log(moveZeros([1,2,0,3,4,0,8,5,0,4,7,8]))