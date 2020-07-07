
// Category: Medium

/*
Given a list of strings strs, containing the strings "red", "green" and "blue", partition the list so that the red come before green, which come before blue.

Constraints

Length of strs is at most 5000.
Bonus: Can you do it in O(N) time?

Double Bonus: Can you do it in O(1) space? That is, can you do it by only rearranging the array (i.e. without creating any new strings)?
*/

function solve(strs) {
    // Write your code here
    let red_arr = [];
    let green_arr = [];
    let blue_arr = [];
    
    for(let i=0; i<strs.length; i++) {
        if(strs[i] === 'red') {
            red_arr.push(strs[i])
        }
        else if (strs[i] === 'green') {
            green_arr.push(strs[i])
        }
        else {
            blue_arr.push(strs[i])
        }
    }
    // console.log([...red_arr, ...green_arr, ...blue_arr])
    return [...red_arr, ...green_arr, ...blue_arr]
}

// Completed, Passes!  
    // Just in Time (14.5 minutes)!

/*
Success!
Your submission took 10 milliseconds.
Your submission was faster than 90.63% of other javascript submissions for this question.
*/

// TESTS
solve()