/* 
    Given an array of ones and zeroes, convert the equivalent binary value to an integer.

    Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

    Examples:

    Testing: [0, 0, 0, 1] ==> 1
    Testing: [0, 0, 1, 0] ==> 2
    Testing: [0, 1, 0, 1] ==> 5
    Testing: [1, 0, 0, 1] ==> 9
    Testing: [0, 0, 1, 0] ==> 2
    Testing: [0, 1, 1, 0] ==> 6
    Testing: [1, 1, 1, 1] ==> 15
    Testing: [1, 0, 1, 1] ==> 11
    However, the arrays can have varying lengths, not just limited to 4.
*/

const binaryArrayToNumber = arr => {
    let decimal = 0;
    let num = 1;
        
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i]){
            decimal += num;
        }
        num *= 2;
    }
    return decimal;
};

//PREP
//Problem: convert the equivalent binary value to an integer
//P: array, integer, 0/1
//R: return integer
//E: 
    function bi2dec(array){
        
        return int;
    }
//P:
    //length of 1
    //double total add leftmost digit