function printerError(s) {
    let print = 'abcdefghijklm'
    let count = 0;
    
    for(let char of s)
      {
        if(!print.includes(char))
          {
            count++;
          }
      }
    return `${count}/${s.length}`
}

