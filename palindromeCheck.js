function palindromeCheck (str) {
  if (typeof str == 'string'){
    for (let a = 0, b = str.length - 1; a < b; a++, b--) {
         if(str[a] != str[b])
           return false;
    }
    return true;
  
  } else {
   throw Error("The word type is " + "<" + typeof str + ">" + ", but should be string");
  }
}


module.exports = palindromeCheck;
