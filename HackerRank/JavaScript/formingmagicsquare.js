// SOURCE: https://www.hackerrank.com/challenges/magic-square-forming/problem
// Magic Squares Resource: https://en.wikipedia.org/wiki/Magic_square

function formingMagicSquare(s) {
    let tc = 0;

    if(s.length === 1 || s.length === 2) {
        // console.log("wha wha whaaaaaa: ", 0)
        return 0  // cannot be constructed
    }

    let mc = s.length*(s.length**2 + 1)/2  // length * (length squared + 1) divided by 2 gives us magic constant(mc)
    console.log(mc)

    let i = 0

    // for(let i=0; i<s.length; i++) {
    //     if(s[i].length !== s.length) {
    //         return 0  // end function and return 0 if input is not a square
    //     }
        let row_sum = s[i][0]+s[i][1]+s[i][2];
        let col_sum = s[i][0]+s[i+1][0]+s[i+2][0];
        let dia_sum = s[i][0]+s[i+1][1]+s[+2][2];
        // console.log(s[i])
        console.log("row: ",row_sum)
        console.log("col: ",col_sum)
        console.log("dia: ",dia_sum)

    // }


}

let input = [ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]
// let input = [ [ 4, 9, 2 ], [ 3, 5, 7 ]]
formingMagicSquare(input)