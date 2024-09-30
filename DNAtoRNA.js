function DNAtoRNA(dna) {
    let arr = dna.split('')
    arr.map((char,i)=>{
      if(char === 'T')
        {
          arr.splice(i,1,'U')
        }
    })
    return arr.join('')
  }

  function DNAtoRNA1(dna) {
    return dna.split("T").join("U");
  }

  function DNAtoRNA2(dna) {
    return dna.replaceAll('T','U');
  }

  console.log(DNAtoRNA("TCCGAAAC"))

  //"UCCGAAAC"