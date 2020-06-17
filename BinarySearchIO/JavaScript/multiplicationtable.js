// SOURCE: 
// CATEGORY: EASY

/* Given an integer n, return a two dimensional matrix representing an n by n multiplication table. For example, given n=3, return
1 2 3
2 4 6
3 6 9
*/

function solve(n) {
    // Write your code here
    const result = [];
    
    for(let i=0; i<n; i++) {
        result.push([])
        for(let j=1; j<=n; j++) {
            result[i].push(j*(i+1))
        }
    }
    console.log(result)
    return result
}

// COMPLETED, SOLVED!
    // Not in Time - took longer than 10 mins.

// TESTS
solve(5)