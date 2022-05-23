/*
    You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

    Write a program that returns the girl's age (0-9) as an integer.

    Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

*/

public class parseInt {
    public static int howOld(final String herOld) {

        String ageChar = herOld.substring(0,1);

        int age = Integer.parseInt(ageChar);

        return age;
        }
}

/*
    PREP
    Problem: Return an integer from a string
    P: string, final
    R: return integer
    E:
        public class ParseInt{
            public static int age(final String givenAge){
                subtring
                convert to number
                return age;
            }
        }
    P:
        get first char from string
        convert char to int
*/