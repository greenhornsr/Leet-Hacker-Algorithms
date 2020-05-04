/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
    // init object/hashtable, store the array values as key, index as the value
    ht = {}
    nums.forEach((num, i) => {
        // difference when subtracting target from current value in array
        let diff = target - num
        // check object/ht using diff as the key.  If the ht[key] is not undefined and is not the same as the current index, return the index value in ht[diff] and the current index
        if(ht[diff] !== undefined && ht[diff] != i){
            console.log(`${diff} + ${num} = ${target}`)
            console.log(`indices: ${ht[diff]}, ${i}`)
            return [ht[diff], i]
        }
        else{
            ht[nums[i]] = i        
        }
    });
    // console.log(`Array element aka KEYS: ${Object.keys(ht)}`)
    // console.log(`VALUES: ${Object.values(ht)}`)
}


// COMPLETED, PASSES!
// twoSum([2, 7, 11, 15], 9)
// twoSum([3,2,3], 6)
twoSum([2,5,5,11],10)


