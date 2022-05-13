/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/



function vowelCount(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if((str[i] === "a") || (str[i] === "e") || (str[i] === "i") || (str[i] === "o") || (str[i] === "u"))
        {
            count++;
        }
    }
    return count;
}


//TEST
console.log(vowelCount("return the number")); //5
console.log(vowelCount("an input string will only")); //6
console.log(vowelCount("lower case letters and")); //7




//PREP
//Problem: count the vowels in a string
//P: word or words, all lowercase
//R: return
//E:
//P:
    //loop
    //conditional [a,e,i,o,u]
    //add to count