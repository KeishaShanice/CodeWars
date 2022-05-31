/*
    You are given an odd-length array of integers, in which all of them are the same, except for one single number.

    Complete the method which accepts such an array, and returns that single different number.

    The input array will always be valid! (odd-length >= 3)

    Examples

    [1, 1, 2] ==> 2
    [17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers){

    var sort = numbers.sort();
    
    if (sort[0] === sort[1]) {
        return sort[sort.length-1]
    }  else {
        return sort[0]
}
}

//TEST
console.log(stray([1, 1, 2])); //2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); //3

/*
    Prep
    Problem: Return different number in array
    P: array,int
    R: return, int
    E:
        function oddMan(array){
            sort
            conditional
            return sort[i];
        }
    P: 
        make variable to hold sorted numbers
        use conditional to compare one number to another
        return vqriable
*/