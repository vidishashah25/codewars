function doubleChar(str) {
    var newString = "";
    for( i = 0; i < str.length; i++) {
      newString += str[i] + str[i];
    }
    return newString;
  }