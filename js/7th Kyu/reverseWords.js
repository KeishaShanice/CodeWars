/*
    Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

    Examples

    "This is an example!" ==> "sihT si na !elpmaxe"
    "double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}


//TEST
console.log(reverseWords("This is an example!")); //sihT si na !elpmaxe
console.log(reverseWords("double  spaces")); //elbuod  secaps


/*
    PREP
    Problem: reverse all words in string
    P: string
    R: return, reversed word
    E: 
        function reverse(string){
            let reversed = '';

            return reversed;
        }
    P:
        place each word into array
        take each word through loop
        reverse

*/