/*
    Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

    Note: input will never be an empty string
*/

function fakeBin(x){
    let newArr = [];
    for(let i = 0; i < x.length; i++){
        if (x[i] < 5) {
            newArr.push("0")
        } else {
            newArr.push("1")
        }
    }
    return newArr.join("")
}

//TEST
console.log(fakeBin('45385593107843568')) //'01011110001100111')
console.log(fakeBin('509321967506747')) //'101000111101101');
console.log(fakeBin('366058562030849490134388085')) // '011011110000101010000011011'


/*
    P: replace digits below 5 replace with 0 and digits above 5 with 1, if 5 keep
    P: string of numbers
    R: ruturn a string
    E: 
        function binaryNumbers(stringNum) {
        let arr = stringNum
        let separated = arr.split("")
        for(){
            if()
        
        }
            return new string
        }
    P: 
        take in a string of numbers
        separate string into characters
        compare each character to string(===) or number 5 (==)
        replace numbers
        rejoin string
        return new string
  */