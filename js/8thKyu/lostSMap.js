/*
    Given an array of integers, return a new array with each value doubled.

    For example:

    [1, 2, 3] --> [2, 4, 6]
*/

function maps(x){
    return  x.map(e =>e*2);
}

//alternative
function double(array){
    let doubledArray = [];

    for(let i = 0; i < array.length; i++){
        doubledArray[i] = array[i] * 2;
    }

    return doubledArray;
}

//TEST
console.log(maps([1, 2, 3])); //[2, 4, 6]
console.log(maps([2,3,4])); //[4,6,8]
console.log(maps([4,5,6])); //[8,10,12]

console.log(double([1, 2, 3]), [2, 4, 6]); //[2, 4, 6]
console.log(double([2,3,4]), [4,6,8]); //[4,6,8]
console.log(double([4,5,6]), [8,10,12]); //[8,10,12]

/*
    PREP
    Problem: Double each value in array
    P: array, integers, always integers?, any special characters?
    R: return, new array with each value doubled
    E: 
        If we are given [2,3,4] should return [4,6,8]
        If we are given [4,5,6] should return [8,10,12]
        If we are given [2,22] should return [4,44]
    P:
        Make function that takes in array
        Map through the array and multiply each element by 2
        Return
*/