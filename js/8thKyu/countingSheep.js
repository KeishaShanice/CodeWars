/*
    Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num){
    let murmur = "";
    for(let i = 1; i <= num; i++){
        murmur += `${i} sheep...`;
        }
        return murmur;
    }
    
    /*
        P: Return a string counting from 1 up to and including num, concatenate number to string "sheep"
        P: non-negative integer
        R: return integer + string
        E:
            function countSheep(num){
                let string = ""
                for(i =1, i < num; i++){
                string += i + sheep + ...
                }
                return string
            }
        P:
            create variable to hold statement
            find all the numbers from 1 up to num
                -loop
            add each number to sheep
            add number and sheep to statement
            print the statement
  */