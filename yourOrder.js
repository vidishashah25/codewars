function order(words){
    let arr = words.split(' ')
    let newArr = [...arr] 
    let index=0;
    arr.map((word)=>{
      word.split('').map((char)=>{
        if(char >= '0' && char <= '9')
          {
            index = parseInt(char)-1
          }  
      })
      newArr.splice(index,1,word)
    })
       return newArr.join(' ') 
    }