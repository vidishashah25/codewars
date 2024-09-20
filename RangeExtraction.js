function solution(list){
    let arr = [];
    let str = []
   for(let i=0; i<list.length; i++)
     {
       if(list[i+1] - list[i] === 1)
         {
           str.push(list[i])
         }
       else {
        if (str.length < 2) {
          arr.push(...str, list[i])
        } else {
          arr.push(str[0] + '-' + list[i])
        }
        str = []
      }
     }
    return arr.join()
  }
  console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));