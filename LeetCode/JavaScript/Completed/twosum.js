// SOURCE: https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    // init object/hashtable, store the array values as key, index as the value
    let ht = {};
    let result = [];

    if(nums.length) {
        for(let i=0; i<nums.length; i++) {
            let diff = target - nums[i]

            if(ht[diff] !== undefined) {
                // console.log(`${diff} + ${nums[i]} = ${target}`)
                // console.log(`indices: ${ht[diff]}, ${i}`)
                result = [ht[diff], i]
                console.log('???', result)
                return result
            }
            ht[nums[i]] = i  
        }
    }
}


// COMPLETED, PASSES!
twoSum([2, 7, 11, 15], 9)
// twoSum([3,2,3], 6)
// twoSum([2,5,5,11],10)