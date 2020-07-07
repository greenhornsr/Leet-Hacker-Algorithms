// SOURCE:  https://binarysearch.io/room/Empty-string-20807
// DIFFICULTY: MEDIUM (15 Minute Time Limit)

/*
Given lists of sorted list of integers, merge them into one large sorted list.

Can you do it better than O(kn log kn) where n is the length of the longest list, and k is the number of lists?
*/

class Solution {
    solve(lists) {
        // Write your code here
        let ret_arr = lists.flat().sort((a,b)=>a-b)
        // console.log(ret_arr)
        return ret_arr
    }
}

// COMPLETED, PASSES
    // Completed within 6 minutes.

/*
Success!
Your submission took 21 milliseconds.
Your submission was faster than 88.11% of other javascript submissions for this question.
*/

// TESTS 
let lists = [[],[],[10, 12],[],[3, 3, 13],[3],[10],[0, 7]]
Solution.solve()