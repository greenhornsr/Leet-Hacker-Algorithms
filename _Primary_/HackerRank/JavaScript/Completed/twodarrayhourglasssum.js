// SOURCE: https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true


function hourglassSum(arr) {
    let o = 0;                              // outer array tracker
    let max = Number.NEGATIVE_INFINITY;     // baseline max; Negative_infinity used; all negative array input

    while(o < (arr.length - 2)) {
        let i = 0;       // inner array top and bottom tracker
        let j = 1;       // inner array center hourglass tracker
        while(i < arr[o].length - 2){
            let sum = 0;     //  hourglass sum results tracker
            let line1 = (arr[o][i] + arr[o][i+1] + arr[o][i+2]);         // calculate line 1 sum
            let line3 = (arr[o+2][i] + arr[o+2][i+1] + arr[o+2][i+2]);   // calculate line 3 sum

            sum += ( line1 + arr[o+1][j] + line3)   // sum line 1, 2 and 3
            sum > max ? max = sum : false;          // set max

            j++;    // increment line 2 tracker
            i++;    // increment line 1/3 inner array tracker
        };
        o++;        // increment outer array tracker
    };
    console.log("Max is: ", max)
    return max;
}

// COMPLETED, PASSES!  
// My Estimated Time complexity: 0(n log n) - nested while loops.
// Tests
let test = [[-1, -1,  0, -9, -2, -2],
            [-2, -1, -6, -8, -2, -5],
            [-1, -1, -1, -2, -3, -4],
            [-1, -9, -2, -4, -4, -5],
            [-7, -3, -3, -2, -9, -9],
            [-1, -3, -1, -2, -4, -5]]
hourglassSum(test)
