/*
    Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

    Examples

    Input: [1, 5.2, 4, 0, -1]
    Output: 9.2

    Input: []
    Output: 0

    Input: [-2.398]
    Output: -2.398

    Assumptions

    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.
*/

function sum(numbers){
    let sumOfNum = 0;

    for (let i = 0; i < numbers.length; i++){
        if(numbers.length === 0) {
            sumOfNum = 0;
        } else {
            sumOfNum += numbers[i];
        }
    }

    return sumOfNum;
}


//TEST
console.log(sum([1, 5.2, 4, 0, -1])); //9.2
console.log(sum([])); //0
console.log(sum([-2.398])); //-2.398

/*
    PREP
    Problem: Add the numbers in an array
    Parameter: array of integers
    Return: return integer sum, return 0 if empty, return return integer if length = 1
    Example:
        function sumArray(array){
            let num = 0;
            for(let i = 0; i < array.length; i++){
                add to num
            }
            return num;
        }
    P:
        create function that takes in an array of integers
        create integer variable to hold sum
        loop through array
        --if length = 0 return zero
        --else add array value at loop index to sum variable
        return sum
*/