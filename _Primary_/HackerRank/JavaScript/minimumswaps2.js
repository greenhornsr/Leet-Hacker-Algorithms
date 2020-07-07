// SOURCE: https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true

function minimumSwaps(arr) {
    let swaps = 0;      // count
    let min = arr[0]    // min num
    let indexofmin = 0  // index

    for(let i=0; i<arr.length; i++) {
        console.log("i: ", i)
        if(arr[i]<min){
            min = arr[i]
            [arr[i], arr[indexofmin]] = [arr[indexofmin], arr[i]]
            indexofmin = i
            swaps += 1;
            console.log(`swapped i: ${arr[i]} with j: ${arr[indexofmin]}`)
            console.log("swapped arr: ", arr)
        }
        else{
            continue
        }
    }
    // console.log("swaps: ", swaps)
    return swaps;
}

// Works, but times out...
function minimumSwaps1(arr) {
    let swaps = 0;

    for(let i=0; i<arr.length; i++) {
        let minimum = Math.min(...arr.slice(i,arr.length));

        if(arr[i] !== minimum) {
            let indexOfMin = arr.indexOf(minimum);
            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]]
            swaps += 1;
            console.log("swapped arr: ", arr)
        }
    }
    // console.log("swaps: ", swaps)
    return swaps;
}

// Tests
minimumSwaps([4,7,2,8,6,3,10,5,9,1])