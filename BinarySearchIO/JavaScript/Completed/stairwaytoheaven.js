// SOURCE: https://binarysearch.io/room/No-Homers-Club-19993
// DIFFICULTY: Easy

function solve(nums) {
    // Write your code here
    const result_arr = []
    
    for(let i=0; i<nums.length; i++){
        result_arr.push(nums[i]+i)
    }
    return result_arr
}

// COMPLETED, PASSES!
    // Solved within 1 minute!

/*
Success!
Your submission took 2 milliseconds.
Your submission was faster than 83.94% of other javascript submissions for this question.
*/

// TESTS!
arr = [5, 3, 7]
solve(arr)