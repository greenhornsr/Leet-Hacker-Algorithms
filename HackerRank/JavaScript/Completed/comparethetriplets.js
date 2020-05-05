// Source: https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
    const results = [0,0]

    a.forEach((ela, i) => {
        if (ela > b[i]){
            results[0] += 1
        }
        if (ela < b[i]){
            results[1] += 1
        }
    })
    console.log(results)
    return results
}

//  COMPLETED!  Passes!
compareTriplets([1,2,3], [3,2,1])