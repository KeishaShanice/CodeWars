/*
    Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

    Note: a and b are not ordered!

    Examples (a, b) --> output (explanation)

    (1, 0) --> 1 (1 + 0 = 1)
    (1, 2) --> 3 (1 + 2 = 3)
    (0, 1) --> 1 (0 + 1 = 1)
    (1, 1) --> 1 (1 since both are same)
    (-1, 0) --> -1 (-1 + 0 = -1)
    (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/
function getSum( a,b )
{
    let sum = 0;

    if(a === b){
        return a;
    } else if(b < a){
        for(let i = a; i >= b; i--){
            sum += i;
        }
    }  else {
        for(let i = a; i <= b; i++){
            sum += i;
        }
    }
    return sum;
}

//TEST
console.log(getSum(1, 2)); // 3 
console.log(getSum(-1, 0)); //-1 
console.log(getSum(-1, 2)); //2 
console.log(getSum(0, -1)); //-1 
console.log(getSum(0, -3)); //-3 

/*
    PREP
    Problem: Return sum of numbers from a to c
    P: integers
    R: return explanation a + b + c = ?
    E:
        function findSum(int, int){
            let sum = int + ... + int;
            return sum;
        }
    P:
        take in two numbers
        loop starting at one up to other
        add numbers
        return sum
*/