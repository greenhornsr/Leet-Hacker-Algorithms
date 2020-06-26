// SOURCE: 
// DIFFICULTY: MEDIUM (15 minutes max)

/*
Longest Substring With Unique Characters
Given a lowercase alphabet string s, return the length of the longest substring with unique characters.

Constraints:    
    Length of s is at most 5000.
*/

function solve(s) {
    if(s.length === 0) {
        return 0
    }
    
    if(s.length === 1) {
        return 1
    }
    
    let count = 0;
    let max = 0;
    let ht = {};
    // let res_string = '';
    // let max_str = ''
    
    for(let i=0; i<s.length; i++) {
        if(ht[s[i]] === undefined) {
            ht[s[i]] = i
            count += 1
            // res_string += s[i]
        }
        else if(ht[s[i]]) {
            if(count > max){
                max = count
                // max_str = res_string
            }
            i = ht[s[i]];
            ht = {};
            // res_string = '';
            count = 0;
        }
    }
    // console.log(max > count ? max : count)
    return max > count ? max : count
}

// COMPLETED, PASSED!  
    // Completed in over an hour.  Edge cases.

/*
Longest Substring With Unique Characters
Given a lowercase alphabet string s, return the length of the longest substring with unique characters.

Constraints

Length of s is at most 5000.  
*/

// TESTS
const input_str = 'czhaneubxohdbnitdxiixnuwa'
solve(input_str)
