// SOURCE: 
// DIFFICULTY: MEDIUM 

/*
Given a list of integers nums, return true if the number of occurrences of every value in the array is unique, otherwise return false.

Note: Numbers can be negative.
Constraint

Length of nums is at most 5,000.
*/


function solve(nums) {
    // Write your code here
    let tracker = {}; // nums[el] : count 
    let freq_ht = {}; // count : {nums[el]}

    for(let i=0; i<nums.length; i++) {
        if(tracker[nums[i]] !== undefined) {
            tracker[nums[i]] += 1
            // moving element to next count in freq tracker or initilizing
            freq_ht[tracker[nums[i]]] = freq_ht[tracker[nums[i]]] ? freq_ht[tracker[nums[i]]].add(nums[i]) :
                new Set([nums[i]])
            // removing from previous    
            freq_ht[tracker[nums[i]]-1].delete(nums[i])
        }
        else {
            tracker[nums[i]] = 1
            // if freqency present
            freq_ht[tracker[nums[i]]] = freq_ht[tracker[nums[i]]] ? freq_ht[tracker[nums[i]]].add(nums[i]) :
                new Set([nums[i]])
        }
    }
    for(const el in freq_ht) {
        // console.log("freq_ht[el]: ", freq_ht[el])
        if(freq_ht[el].size > 1){
            // console.log(false)
            return false
        }
    }
    // console.log(true)
    return true
}

// COMPLETED, PASSES!
    // Completed after 45 mins; 15 minute time limit; failed to complete in time, but done nonetheless.

/*
Success!
Your code passed the example test cases.
*/

// TESTS