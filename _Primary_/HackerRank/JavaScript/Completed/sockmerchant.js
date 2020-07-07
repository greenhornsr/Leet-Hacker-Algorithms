// Source: https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// Complete the sockMerchant function below.
// Return the total number of matching pairs of socks that John can sell.
function sockMerchant(n, ar) {
    // n is the length of the array (ar)
    // need to loop through the ar, check for a matching element, then move to the next loop.
    let matching = new Set(ar)
    let pairs = 0
    for(let j=0; j<n; j++){
        if(matching[ar[j]] === undefined){
            matching[ar[j]] = 1
        }
        else {
            matching[ar[j]] = matching[ar[j]] += 1
            if(matching[ar[j]] % 2 == 0){
                pairs += 1
                matching[ar[j]] = 0
            }
        }
    };
    console.log(matching)
    console.log(pairs)
    return pairs
}


// COMPLETE, PASSES!  #1
// Test
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])