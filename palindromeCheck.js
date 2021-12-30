function palindromeCheck (str){
    let strCheck = str.split('').reverse().join('');
    if (strCheck == str) {
        return true;
    } else {
        return false;
    }
}

let test1 = console.log (palindromeCheck('aaaaaa'));
let test2 = console.log (palindromeCheck('abcd'));
let test3 = console.log (palindromeCheck('abbc'));
let test4 = console.log (palindromeCheck('abba'));
