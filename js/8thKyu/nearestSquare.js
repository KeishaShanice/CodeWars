/*
    Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)),2)
}

/*
    P:  Write a function that finds the neares square number
    P: integer
    R: return interger, square of n
    E: 
        function nearSq(int){
            let sqroot = Math.sqrt(n)
            let rounded = Math.round(sqroot)
            let squared = Math.pow(rounded, 2)
        }
    P:
        get square root
        round value
        square
*/