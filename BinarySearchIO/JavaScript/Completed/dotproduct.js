//  SOURCE: https://binarysearch.io/room/No-Homers-Club-19993
//  CATEGORY: EASY

/*  The dot product of two lists is the sum of the products of their corresponding entries.  For example, given a = [1, 2, 3] and b = [4, 5, 6], the dot product is 32, since (1 × 4) + (2 × 5) + (3 × 6) = 32.  Given two lists of integers, compute their dot product.
*/

function solve(a, b) {
    // Write your code here
    let result = 0;
    for(let i=0; i<a.length; i++) {
        result += (a[i]*b[i])
    }
    // console.log(result)
    return result
}

// COMPLETED, PASSES!
    // Solved within 3 minutes.
/*
Success!
Your submission took 1 millisecond.
Your submission was faster than 99.55% of other javascript submissions for this question.
*/ 

// TESTS
a = [1, 2, 3]
b = [4, 5, 6]

solve(a,b)