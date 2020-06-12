// Source: https://leetcode.com/problems/shuffle-the-array/

// nums = array; n = first el post x, and start el of y 
// i.e. x[],y[n]
const shuffle = (nums, n) => {
    if(n === nums.length || n===0) {
        return nums;
    };
    
    let result_array = [];

    for(let i = 0; i < n; i++) {
        result_array.push(nums[i], nums[n+i])
    }
    console.log(result_array)
    return result_array
}

// COMPLETED, PASSES. 

// TIME COMPLEXITY: n(log n)
// SPACE COMPLEXITY: 0(n) 

// LEETCODE FEEDBACK: 
// Runtime: 80 ms, faster than 72.56% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 38.4 MB, less than 100.00% of JavaScript online submissions for Shuffle the Array.

// TESTS
const arr = [2,5,1,3,4,7], split = 3
// const arr = [1,2,3,4,4,3,2,1], split = 4
// const arr = [1,1,2,2], split = 2

shuffle(arr, split)