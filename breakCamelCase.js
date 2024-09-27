function solution(string) {
  
    let res = ''
    
    for(let char of string)
      {
        if(isUpperCase(char))
          {
            res += ' '
          }
        res += char;
      }
    console.log(res)
    return res;
  }
  
  function isUpperCase (input) {  
    return input === String(input).toUpperCase()
  }

  console.log(solution("camelCase"))
  //"camel Case"