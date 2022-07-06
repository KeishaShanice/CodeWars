/*
    Given an array of integers your solution should find the smallest integer.

    For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345
    You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let newArray = args.sort((a, b) => a - b);
        return newArray[0];
    }
}


//TEST
let testInt = new SmallestIntegerFinder();
console.log(testInt.findSmallestInt([34, 15, 88, 2])); //2
console.log(testInt.findSmallestInt([34, -345, -1, 100])); //-345


/*
    PREP
    Problem: Find smallest integer in given array
    P: int, includes negative and positive
    R: return, integer
    E: 
        function smallInt(array){

            return arr[position]
        }
    P:
        sort the array
        return the smallest value-position 0
*/