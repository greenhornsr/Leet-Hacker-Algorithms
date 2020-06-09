

function are_following_patterns(strings, patterns) {
    if(strings.length === 1) {
        console.log('true')
        return true
    }

    let spat = ''
    let ppat = ''

    for(let i=0; i<strings.length; i++) {
        if(strings[i] === strings[i+1]) {
            spat += 's'
        }
        if(patterns[i] === patterns[i+1]) {
            ppat += 's'
        }
        spat += 'd'
        ppat += 'd'
    }
    console.log(spat === ppat)
    return spat === ppat 
}

// COMPLETED, PASSING!
// TESTS
let s = ["cat","dog","dog"]
let p = ["a","b","b"]
// let s = ["cat","dog","doggy"]
// let p = ["a","b","b"]
// let s = ["cat"]
// let p = ["a"]

are_following_patterns(s,p)