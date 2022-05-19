/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumLeastTwo(arr){
    let least = arr[0];
    let second = arr[1];

    if(second < least){
        least = arr[1];
        second = arr[0];
    }

    for(let i = 2; i < arr.length; i++){
        if(arr[i] < least ){
            second = least;
            least = arr[i];
        } else if (arr[i] < second){
            second = arr[i];
        }
    }
    
    let sum = least + second;

    return sum;
}

//TEST
console.log(sumLeastTwo([10, 343445353, 3453445, 3453545353453])); //3453455

//PREP
//Problem: Return sum of least two array values
//P: array, int, >=4 vals
//R: return
//E
    //function sumTwoSmallestNumbers(numbers) {  
        //Code here
        //compare numbers
        //use 1st 2 arr indexes to start
        //add

    //    return sum;
    //}
//P