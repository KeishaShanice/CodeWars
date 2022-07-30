function findChildren(dancingBrigade) {
    const allCaps = dancingBrigade.toUpperCase().split('').sort();
    
    const ordered = allCaps.map((letter, index) => {
        const previous_letter = allCaps[index - 1] ?? "";
        return previous_letter === letter ? letter.toLowerCase() : letter;
    }).join('');

    return ordered;
}

/*
P: String of letters, uppercase, lowercase
R: Return string in alphabetical order, uppercase before lowercase
E: 
    function organizeKids(string){
        string.split
    }
P: take input string
    seperate each character
    sort the chararacters
    recombine string
*/