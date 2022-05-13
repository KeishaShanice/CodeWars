/*
    Trolls are attacking your comment section!

    A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

    Your task is to write a function that takes a string and return a new string with all vowels removed.

    For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

    Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str){
    let newString = '';
    for(let i = 0; i < str.length; i++){
        let lcase = str[i].toLowerCase();
        if((lcase !== "a") && (lcase !== "e") && (lcase !== "i") && (lcase !== "o") && (lcase !== "u")) {
            newString += str[i];
        }
    }
    return newString;
}


// TEST
console.log(disemvowel("This website is for losers LOL!" )); // "Ths wbst s fr lsrs LL!"
console.log(disemvowel("A common way to deal")); //"cmmn wy t dl"
console.log(disemvowel("return a new string")); //"rtrn nw strng"


//PREP
//Problem: remove the vowels from a string return string without vowels as a new string
//P: word, letters, uppercase, lowercase
//R: return
//E: 
//P: 
    //loop --send each letter of string through
    // conditional aeiou
    // return newString