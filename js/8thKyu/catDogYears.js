/*
    I have a cat and a dog.

    I got them at the same time as kitten/puppy. That was humanYears years ago.

    Return their respective ages now as [humanYears,catYears,dogYears]

    NOTES:

    humanYears >= 1
    humanYears are whole numbers only
    Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that
    Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
*/
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears;
    let dogYears;
    
    if(humanYears === 1){
        catYears = 15;
        dogYears = 15;
        console.log(catYears);
        console.log(dogYears);
    } else if (humanYears === 2){
        catYears = 15 + 9;
        dogYears = 15 + 9;
        console.log(catYears);
        console.log(dogYears);
    } else {
        catYears = ((humanYears - 2) * 4) + (15 + 9);
        dogYears = ((humanYears - 2) * 5) + (15 + 9);
        console.log(catYears);
        console.log(dogYears);
    } 
    
    let yearsArray = [humanYears, catYears, dogYears]

    return yearsArray;
}


//TEST
console.log(humanYearsCatYearsDogYears(1)); //[1,15,15]
console.log(humanYearsCatYearsDogYears(2)); //[2,24,24]
console.log(humanYearsCatYearsDogYears(10)); //[10,56,64]

/*
    PREP
    Problem: Return animal age in human, cat, and dog years
    P: int, only whole numbers, >=1
    R: return, array, 3 indexes
    E:
        function animalYears(humanYears){
            let catYears;
            let dogYears;
            let yearsArray = [humanYears, catYears, dogYears];

            math

            return yearsArray;
        }
    P:
        create variables to hold cat and dog years
        create array to hold values
        calculate years and save into respective variables
            1hy = 15 cy
            2hy = 9 cy
            3>hy = 4 cy

            1hy = 15 dy
            2hy = 9 dy
            3>hy = 5 dy
*/