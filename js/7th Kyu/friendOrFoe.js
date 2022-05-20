/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
*/

function friend(friends){
    let friendArray = [];

    for(let i = 0; i < friends.length; i++){
        if(friends[i].length === 4){
            friendArray.push(friends[i]);
        }
    }
    return friendArray;
}

//TEST
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
console.log(friend(["Keith", "Lesly", "Bobb", "Katy", "Urin", "Jacob"]));

//PREP
//Problem: Filter strings based on length
//P: array, strings
//R: return, list
//E:
    /*
    function myFriends(arr){
        //loop
        //conditional
            //length

        return friendArray;
    }
    */
//P:
    /*
        take in array
        get each string separate 
        compare string length to 4
        add to new array if equals 4
    */