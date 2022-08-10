/*
    Implement a function which convert the given boolean value into its string representation.

    Note: Only valid inputs will be given.
*/

function booleanToString(b){
    return (b === true ? "true": "false");
}

//TEST
console.log(booleanToString(true));
console.log(booleanToString(false));

/*
    P: turn boolean value into string value
    P: boolean
    R: return a string of the boolean
    E: 
        function boolToStr(bool) {
            if (bool === true){
                return "true"
            } else {
                return "false"
            }
        }
    P: 
        compare parameter to boolean value
        when boolean is true output "true"
        when boolean is false output "false"
*/