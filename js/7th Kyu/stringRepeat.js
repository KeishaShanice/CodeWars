/*
    Write a function called repeatStr which repeats the given string string exactly n times.

    repeatStr(6, "I") // "IIIIII"
    repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
    let newString = '';
    for(let i = n - 1; i >= 0; i--){
        newString+= s;
    }
    return newString;
}

//TEST
console.log(repeatStr(3,'Toxic'));
console.log(repeatStr(2, 'Toxic'));
console.log(repeatStr(5, 'Toxic'));

//PREP
//Problem: repeat the string n times
//P: an int, a string of variable letters
//R: return, string
//E:
    // function repeatStr (num, str) {
    //      take in full string length
    //      add string to itself n -1 times
    //     return string;
    // }
//P: