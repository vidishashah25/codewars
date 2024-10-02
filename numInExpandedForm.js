function expandedForm(num) {
    return num.toString()
              .split('')
              .reverse()
              .map((k,i)=> k * Math.pow(10,i))
              .filter(k => k > 0)
              .reverse()
              .join(" + ")
  }