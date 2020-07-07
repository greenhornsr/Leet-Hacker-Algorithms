/*
source: https://leetcode.com/problems/contains-duplicate/

**** 217. Contains Duplicate ****
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:              Example 2:              Example 3:
Input: [1,2,3,1]        Input: [1,2,3,4]        Input: [1,1,1,3,3,4,3,2,4,2]
Output: true            Output: false           Output: true

*/

var containsDuplicate = function(nums) {
    //   ** AN OPTIMAL SOLUTION - JS has a SET class!  If set is NOT equal to array length, there were duplicates; return true; else return false.  Great solution! **
    let set = new Set(nums);
    return (set.size < nums.length)
    // END optimal SOLUTION


    //     My FIRST PASS CODE: 
        // ht = {}
        // let result = false;
        // if(nums.length == 0){
        //     return false
        // } else {
        //     nums.forEach(num => {
        //         if(ht[num] !== undefined){
        //             result = true
        //             return result
        //         }
        //         else {
        //             ht[num] = num
        //         }
        //     })
        // return result   
        // }
};

// COMPLETED, PASSES!
// ** TEST MY CODE: ** 
// containsDuplicate([2,14,18,22,22])
// containsDuplicate([1,2,3,1])
containsDuplicate([0,4])