/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

function getMiddle(s)
{
    let middle = '';
    let median = s.length / 2;
    if(s.length === 1){
        middle = s;
    } else if(s.length % 2 === 0){

        middle = s[median - 1] + s[median]; //median - 1 = index
    } else {
        middle = s[Math.ceil(median-1)];
    }
    return middle;
}

//TEST
console.log(getMiddle("test")); //should return "es"

console.log(getMiddle("testing")); //should return "t"

console.log(getMiddle("middle")); //should return "dd"

console.log(getMiddle("A")) //should return "A"

//PREP
//Problem: Return the middle character of a string
//P: string, 0 - 1000, even or odd
//R: return - middle character if odd, middle 2 if even
//E
/*
    function middleCharacter(string){
        //% 0 1
        //median

        return middle;
    }*/
//P
    //use modulus to check if even or odd
    //add 1 to string length then divde by 2
        //if half number use current + 1