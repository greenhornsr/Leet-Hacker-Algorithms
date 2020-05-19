// REGEX - practice source: https://fireship.io/lessons/regex-cheat-sheet-js/

// Ways to create a regular expression
// 1. literal
const re = /foo/;
// 2. instantiate RegExp()
const re2 = new RegExp(/foo/);

// Ways to use a regular expression on a string primitive, 
// 1. 'match' all the occurrances
const matches = 'aBC'.match(/[A-Z]/g)  //  anything outside / / is a flag; in this case g for global
    // console.log(matches)
    // expected output: [B,C]
// 2. 'search' for the existence of a pattern
const index = 'aBC'.search(/[A-Z]/)
    // console.log(index)
    // expected output: 1
// 3. 'replace' matches with new values
const next = 'aBC'.replace(/a/, 'A')

