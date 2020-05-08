// Source:  https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    // increment by 2 if arr[k] = 0; by 1 otherwise.
    //  if k = arr[arr.length-1]; increment i last time to where k is.
    let k = 2;
    let jumps = 0;

    while(k <= c.length){
        if(c[k] == 0){
            jumps += 1;
            k += 2;
            // console.log("plus 2")
        }
        else {
            jumps += 1;
            k += 1;
            // console.log("plus 1")
        }
    }
    // console.log(`JUMPS: ${jumps}`)
    return jumps
}

// COMPLETED, PASSES!
// Time Complexity:  O(log n);
// Space Complexity:  O(1) - space doesn't change; constant space.
// TEST
// let input = [0,0,0,1,0,0]   // expected output: 3
// let input = [0,0,1,0,0,1,0] // expected output: 4
// let input = [0,1,0,1,0,1,0] // expected output: 3
let input = [0,0,1,0,1,0,0] // expected output: 3
jumpingOnClouds(input)
