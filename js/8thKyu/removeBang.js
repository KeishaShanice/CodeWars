/* 
    Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// function removeExclamationMarks(s) {
//     let noExclam = '';

//     for(let i = 0; i < s.length; i++){
//         if(s[i] !== "!"){
//             noExclam = noExclam + s[i]
//         }
//     }

//     return noExclam;
// }


    alternative:
    function removeExclamationMarks(s){
        let replaced = s.replace(/!/g, '');
        return replaced;

        //or
        //return s.replace(/!/g, '');
    }


//TEST
console.log(removeExclamationMarks("Hello!")); //Hello
console.log(removeExclamationMarks("What?!?!?!?!?!?!")); //WHAT??????
console.log(removeExclamationMarks("!!!!WARNING!!!!")); //WARNING

/*
    PREP
    Problem: Remove all exclamation marks from a string
    P: string
    R: return, string
    E:
        function removeBang(string){
            let noBangs = '';
            remove bangs
            return noBangs;
        }
    P:
        takes in a string
        loop through string
        add to variable if not !
*/