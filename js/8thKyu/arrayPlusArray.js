/*
    I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

    P.S. Each array includes only integer numbers. Output is a number too.  
*/

function sumTwoArrays(arrayOne, arrayTwo){
    let arrOneSum = 0;
    let arrTwoSum = 0;

    for(let i = 0; i < arrayOne.length; i++){
        arrOneSum += arrayOne[i];
    }

    for(let i = 0; i < arrayTwo.length; i++){
        arrTwoSum += arrayTwo[i];
    }

    return arrOneSum + arrTwoSum;
}

//TEST
console.log(sumTwoArrays([1,2,3], [1,2,3])); //12
console.log(sumTwoArrays([1,1,1], [1,1,1])); //6
console.log(sumTwoArrays([2,2,2], [2,2,2])); //12

/*
    PREP
    Problem: Add the numbers in 2 arrays then find sum of two arrays
    Parameter: 2 arrays of integers
    Return: return sum of 2 arrays
    Example:
        function sumArray(array, array2){
            let num = 0;
            let num2 = 0;
            for(let i = 0; i < array.length; i++){
                add to num
            }
            for(let i = 0; i < array2.length; i++){
                add to num2
            }
            return num + num2;
        }
    P:
        create function that takes in an array of integers
        create integer variable to hold sum of each array
        loop through arrays
        add array value at loop index to sum variable
        add array values together
        return sum
*/