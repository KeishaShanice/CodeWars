/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/


function lovefunc(flower1, flower2){
    if(((flower1 % 2 == 0) && (flower2 % 2 == 1)) || ((flower2 % 2 == 0) && (flower1 % 2 == 1))){
        return true
    } else {
        return false
    }
}


//TEST
console.log(lovefunc(3,5));
console.log(lovefunc(2,2));
console.log(lovefunc(3,4));
console.log(lovefunc(15,8));

//PREP
//Problem: return true if one petal is even and the other is odd and false otherwise
//P: num, even or odd
//R: return, true or false
//E
    // function inLove(num1, num2){
    //     check if num1 is odd or  even
    //     check if num2 is odd or even
    //     return Boolean;
    // }
//P