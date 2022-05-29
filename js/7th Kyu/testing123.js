/*
    Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

    Write a function which takes a list of strings and returns each line prepended by the correct number.

    The numbering starts at 1. The format is n: string. Notice the colon and space in between.

    Examples:

    number([]) // => []
    number(["a", "b", "c"]) // => ["1: a", "
*/

var number=function(array){
    let numArray = [];

    if(array.length === 0){
        return numArray;
    } else {
        for(let i = 0; i < array.length; i++){
            numArray[i] = (i + 1) + ": " + array[i];
        }
    
        return numArray;
    }
}

//TEST
console.log(number([]));
console.log(number(["a", "b", "c"]));

//PREP
//Problem: prepend an ordered number to strings in array
//P: array, strings
//R: return, strings in array numbered
//E:
    //function numberArr(arr){
      //  let newArray = [];

      //  return newArray;
   // }
//P:
    //create new array
    //loop through array
    //add number to each strin in array in new array
    //return new array