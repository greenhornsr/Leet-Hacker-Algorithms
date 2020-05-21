// Lambda HackerRank Challenge - Equalize Array
// SOURCE: https://www.hackerrank.com/test/23an7o3tb7/questions/8sp5kqlch30

function equalizeArray(arr) {
    let ht = {}
    let deletions = 0
    let maxv = 0;

    for(const el of arr){
        !ht[el] ? ht[el] = 1 : ht[el] += 1
        ht[el] > maxv ? maxv = ht[el] : deletions += 1
    }
    return deletions
}

// COMPLETED, Passes All tests!
// Tests
equalizeArray([3,3,1,2,3])
