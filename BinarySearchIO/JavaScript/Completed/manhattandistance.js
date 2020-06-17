// SOURCE:  https://binarysearch.io/room/DP-Experts-20443
// CATEGORY: EASY

// Given integers x0, y0, x1 and y1 return the sum of the absolute differences of their Cartesian coordinates (x0, y0) and (x1, y1).

function solve(x0, y0, x1, y1) {
    // Write your code here
    console.log((Math.abs(x1 - x0)) + (Math.abs(y1 - y0)))
    return (Math.abs(x1 - x0)) + (Math.abs(y1 - y0))
}

// COMPLETED, PASSES!
    // Solved within 5 minutes.

/*
Success!
Your submission took 1 millisecond.
Your submission was faster than 97.85% of other javascript submissions for this question.
*/

// Tests
solve(0,1,3,2)