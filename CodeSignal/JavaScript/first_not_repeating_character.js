// Given a string 's' consisting of small English letters, find and return the firstinstance of a non-repeating character in it. If there is no such character, return '_'.

function first_not_repeating_character(s){
    if(!s.length) {
        console.log('_')
        return '_'
    }
    if(s.length === 1) {
        console.log(s[0])
        return s[0]
    }

    let freqtracker = {}

    for(let i=0; i<s.length; i++) {
        if(freqtracker[s[i]] !== undefined) {
            freqtracker[s[i]] += 1
        }
        else {
            freqtracker[s[i]] = 1
        }
    }

    for(const el of s) {
        if(freqtracker[el] == 1) {
            console.log(el)
            return el
        }
    }
    console.log('_')
    return '_'
}


// let s = 'abacabad'
// let s = 'abacabaabacaba'
// let s = 'z'
let s = 'zc'
first_not_repeating_character(s)