function alphabetPosition(text) {
    let str = text.replace(/[^A-Za-z]/g, '').toLowerCase();
    let numStr = ''
    for(let char of str)
      {
        numStr += `${char.charCodeAt(0) - 97 + 1} `
      }
    
    console.log(numStr)
    
    return numStr.trim();
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))

  //Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"