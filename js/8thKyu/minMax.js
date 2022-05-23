/*
    Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

    Examples (Input -> Output)

    * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
    * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
    * [42, 54, 65, 87, 0]             -> min = 0, max = 87
    * [5]                             -> min = 5, max = 5
    Notes

    You may consider that there will not be any empty arrays/vectors.
*/

var min = function(list){
    let min = list[0];
    let position = 0;

    if(list.length === 1) {
        position = 0;
    }

    for(let i = 1; i < list.length; i++){
        if(list[i] < min){
            min = list[i];
            position = i;
        }
    }

    return list[position];
}

var max = function(list){
    let max = list[0];
    let position = 0;

    if(list.length === 1) {
        position = 0;
    }

    for(let i = 1; i < list.length; i++){
        if(list[i] > max){
            max = list[i];
            position = i;
        }
    }

    return list[position];
}

//TEST
console.log(min([4,6,2,1,9,63,-134,566])); //min = -134
console.log(max([4,6,2,1,9,63,-134,566])); //max = 566
console.log(min([-52, 56, 30, 29, -54, 0, -110])); //min = -110
console.log(max([-52, 56, 30, 29, -54, 0, -110])); //max = 56
console.log(min([42, 54, 65, 87, 0])); //min = 0
console.log(max([42, 54, 65, 87, 0])); //max = 87
console.log(min([5])); //min = 5
console.log(max([5])); //max = 5

/*
    PREP
    Problem: Return min and max from list
    P: list/array, integers, postitive, negative
    R: return list/array index
    E:
        function min(array){
            let min = array[0];
            compare
            return array[minPosition];
        }
    P:
        //set min/max to array index
        //loop through array comparing indexes
        //return min/max at array position
*/