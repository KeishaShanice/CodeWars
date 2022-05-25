/*
    Simple, given a string of words, return the length of the shortest word(s).

    String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    //change into an array
    words = s.split(" ");
    let smallest = words[1];

    words.forEach(word => {
        if(word.length < smallest.length){
            smallest = word;
        }
    });

    return smallest.length;
}

//TEST
console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); //3
console.log(findShort("Let's travel abroad shall we")); //2

/* 
    PREP
    Problem: Return length of shortest word in string
    P: string, length 1>
    R: return, integer
    E: 
        function shortest(string){
            let shortestLength = 0;
            let word = '';

            return shortestLength;
        }
    P:
        account for each word in string
        compare length of words
        return length of smallest word
*/