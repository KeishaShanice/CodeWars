/*
    Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

    Examples:

    Input: 42145 Output: 54421

    Input: 145263 Output: 654321

    Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
    //create an array of integers
    let arr = String(n).split("").map((n) => {
        return Number(n);
    });
    //sort array
    arr.sort();
    
    //place numbers in descending order
    let desNum = '';
    for(let i = arr.length -1; i >=0; i--){
        desNum+= arr[i];
    }
    return Number(desNum);
}

//TEST
console.log(descendingOrder(42145)); //54421
console.log(descendingOrder(145263)); //654321
console.log(descendingOrder(123456789)); //987654321



//PREP
//Problem: Sort numbers in descending order
//P: non-negative integer
//R: return, int
//E:
    //function descend(int){
        //array
        //loop through
        //return desInt;
    //}
//P: