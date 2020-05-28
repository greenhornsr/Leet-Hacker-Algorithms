// SOURCE: https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true


function hourglassSum(arr) {
    let o = 0;       // outer array tracker
    let max = 0;     // store results

    while(o < (arr.length - 2)) {
        // console.log("o: ", o)
        let i = 0;       // inner array top and bottom tracker
        let j = 1;       // inner array center hourglass tracker
        while(i < arr[o].length - 2){
            let sum = 0;     //  hourglass sum results tracker
            // console.log("i: ", i)
            let line1 = (arr[o][i] + arr[o][i+1] + arr[o][i+2])
            // console.log("line 1: ", line1)
            let line3 = (arr[o+2][i] + arr[o+2][i+1] + arr[o+2][i+2])
            // console.log("line 3: ", line3)
            sum += ( line1 + arr[o+1][j] + line3)
            sum > max ? max = sum : false;
            // console.log("sum", sum)
            j++
            i++
        }
        o++
    }
    // console.log("Max is: ", max)
    return max
}

// Tests
let test = [[-1, -1,  0, -9, -2, -2],
            [-2, -1, -6, -8, -2, -5],
            [-1, -1, -1, -2, -3, -4],
            [-1, -9, -2, -4, -4, -5],
            [-7, -3, -3, -2, -9, -9],
            [-1, -3, -1, -2, -4, -5]]
hourglassSum(test)
