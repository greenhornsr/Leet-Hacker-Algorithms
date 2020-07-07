// SOURCE:  https://binarysearch.io/room/Fords-of-Bellman-20465
// CATEGORY: EASY

/* 
    Given a 2-dimensional list matrix, return the number of even numbers in the matrix.
 */

//  My first pass solution
function solve0(matrix) {
    // Write your code here
    // Track the count
    let count = 0;
    // Loop through outer array
    for(let i=0; i<matrix.length; i++) {
        // Loop through inner array
        for(let j=0; j<matrix[i].length; j++){
            // Increment count if inner el is even
            if(matrix[i][j] % 2 === 0) {
                count ++
            }
        }
    }
    // console.log(count)
    return count
}

// COMPLETED, PASSES!

/*
Success!
Your submission took 6 milliseconds.
Your submission was faster than 61.24% of other javascript submissions for this question.
*/

const twodarr = [[1, 2, 8],[3, 5, 5],[4, 6, 6]]
solve(twodarr)