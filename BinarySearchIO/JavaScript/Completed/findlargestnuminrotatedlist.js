// SOURCE: https://binarysearch.io/room/Empty-string-20807
// DIFFICULTY: MEDIUM

/*
Find the largest number in a rotated sorted list
You are given a list of integers nums that is sorted in ascending order and is rotated at some pivot point. Find the maximum number in the rotated list.

Constraints:
    Length of nums is at most 5000
*/

function solve(arr) {
    // Write your code here
    const result = Math.max(...arr)
    return result
}

// COMPLETED, PASSES!
    // Finished in 3 minutes

/*
Success!
Your submission took 2 milliseconds.
Your submission was faster than 100.00% of other javascript submissions for this question.
*/

// Alternative Approach
function solve1(arr) {
    let max = arr[0];

    for(let i=0; i<arr.length; i++) {
        arr[i] > max ? max = arr[i] : false;
    }
    console.log(max);
    return max
}

// TESTS
let myinput = [6, 7, 8, 1, 4]
// solve(myinput)
solve1(myinput)
