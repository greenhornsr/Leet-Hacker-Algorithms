// SOURCE: 
// DIFFICULTY: MEDIUM

/*
Set Bits
Given an integer n, return the total number of set bits in all integers between 1 and n (inclusive).

For example, given the n = 5, return 7 since we have the following numbers in binary:
i | binary
----------
1 | 001
2 | 010
3 | 011
4 | 100
5 | 101

And counting up all the 1s under the binary column gives us 7.

Bonus: Can you do this in O(log n) time?
*/


// My first pass solution.  Extremely slow :(
function solve(n) {
    // Write your code here
    let count = 0;
    // console.log("n is: ", n)
    for(let i=1; i<=n; i++) {
        // Parse integer base 10(decimal) to string base 2(binary)
        const test = parseInt(i, 10).toString(2)
        // console.log("String to Number: ", Number (test))
        // console.log("TYPE: ", typeof Number(test))
        // Increment count if a 1 is present in the string using match method and regex;
            // string.match returns an array of matching content.  
        count += (test.match(/1/g)).length
    }
    console.log("count: ", count)
    return count
}

// COMPLETED, PASSES!

/*
Success!
Your submission took 424 milliseconds.
Your submission was faster than 28.74% of other javascript submissions for this question.
*/

//  ATTEMPT 2: Faster than attempt 1, but still slow.
function solve2(n) {
    // Write your code here
    let count = 0;
    for(let i=1; i<=n; i++) {
        const test = parseInt(i, 10).toString(2)
        for(let j=0; j<test.length; j++) {
            test[j] === '1' ? count += 1 : count
        }
    }
    return count
}

/*
Success!
Your submission took 288 milliseconds.
Your submission was faster than 56.67% of other javascript submissions for this question.
*/

// TESTS
const num = 12
// solve(num)
// solve2(num)
solve3(num)
