// Source: https://binarysearch.io/room/Kadane's-Room-28702
// Difficulty: Medium(15 minutes)

// First Pass
function solve(s, t) {
    console.log("s", s.length)
    console.log("t: ", t.length)
    let trueCountS = 0
    let trueCountT = 0
    for(let i=0; i<t.length; i++) {
        if(s[i] <= t[i]) {
            trueCountS += 1
            console.log("varS: ", trueCountS)
        }
        if(t[i] <= s[i]) {
            trueCountT += 1
        }
    }
    console.log("varS: ", trueCountS)
    console.log("varT: ", trueCountT)
    return trueCountS === s.length || trueCountT === t.length ?
    true : 
    false
}

// Second Pass
function solve1(s, t) {
    if(s.localeCompare(t) === -1 || s.localeCompare(t) === 0) {
        console.log(true)
        return true
    }         
    if(t.localeCompare(s) === -1 || t.localeCompare(s) === 0) {
        console.log(true)
        return true
    } 
    console.log(false)
    return false;
}