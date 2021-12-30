function palindromeCheck (str) {
    for (let a = 0, b = str.length - 1; a < b; a++, b--) {
         if(str[a] != str[b])
           return false;
    }
    return true;
}


