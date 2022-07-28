/*
    Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

    Can you help her?

    function greet(name){
        return "Hello, " + name + "!";
        if(name === "Johnny")
        return "Hello, my love!";
    }
*/
    function greet(name){
        if(name === "Johnny" || name === "johnny") {
            return "Hello, my love!";
        } else {
            return "Hello, " + name + "!";
        }
    }

/*
    P:  Write a function that returns a special case for Johnny
    P: string
    R: string including string parameter, if johnny return string
    E: 
        function greet(String:name) {
            johnny {
                return special message
            } otherwise {
                return message + name
            }
        }
    P:
*/