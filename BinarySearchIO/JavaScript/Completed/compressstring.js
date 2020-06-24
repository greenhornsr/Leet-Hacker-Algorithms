// SOURCE: https://binarysearch.io/room/Empty-string-20807
// DIFFICULTY: MEDIUM (15 minute timer)

/*
Given a string s, eliminate consecutive duplicate characters from the string and return it.

That is, if a list contains repeated characters, they should be replaced with a single copy of the character. The order of the elements should not be changed.

Constraints:
    Length of s is at most 5000.
*/


// My First Pass.
function solve(s) {
    // Write your code here
    const ht = {};
    let retstr = '';
    
    for(let i=0; i<s.length; i++) {
        if(ht[s[i]] !== undefined) {
            if(s[i] === s[i-1]) {
                continue
            }
            else {
                retstr += s[i]
            }
        }
        else {
            ht[s[i]] = s[i]
            retstr += s[i]
        }
    }
    s = retstr
    return s
}

// COMPLETED, PASSES!
    // Completed in 21 minutes; 6 minutes over.

/*
Success!
Your submission took 18 milliseconds.
Your submission was faster than 13.08% of other javascript submissions for this question.
*/

// TESTS
let input_str = "aaaaaabbbccccaaaaddf"
solve(input_str)