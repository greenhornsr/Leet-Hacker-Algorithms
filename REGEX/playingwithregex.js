// REGEX - practice source: https://fireship.io/lessons/regex-cheat-sheet-js/

// Ways to create a regular expression
// 1. literal
const re = /foo/;
// 2. instantiate RegExp()
const re2 = new RegExp(/foo/);

// Ways to use a regular expression on a string primitive, 
// 1. 'match' all the occurrances
const matches = 'aBC'.match(/[A-Z]/g)  //  anything outside / / is a flag; in this case g for global
    // console.log(`matches result: ${matches}`)
    // expected output: [B,C]
// 2. 'search' for the existence of a pattern
const index = 'aBC'.search(/[A-Z]/)
    // console.log(`search result: ${index}`)
    // expected output: 1
// 3. 'replace' matches with new values
const next = 'aBC'.replace(/a/, 'A')
    // console.log(`next result: ${next}`)
    // expected output: ABC

// Password Validation with REGEX!
// Lets force passwords to contain a capital letter, lowercase letter, a number and a min. length of 8 {8, } and max. length of {, 16}
const pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/g
// const pw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm
const mypws = ["Fernando", "f3rn4", "F3rnand0!", "fernando123!", "1sMyPasswordOK?", "Testing123!"]

const validatepassword = (pwarray, regexrules) => {
    for(const mypw of pwarray){
        console.log("\n"+mypw)
        const match = mypw.match(regexrules)
        !match ? console.log("invalid password.") : console.log(`${mypw} is valid.`)
    }
}
// validatepassword(mypws, pw)


// Smart Character Replacement
// source: https://blog.bitsrc.io/4-practical-use-cases-for-regular-expressions-b6ab140894fd
let camelRE = /([A-Z])/g
let phrase = "thisIsACamelCaseString"
console.log(phrase.replace(camelRE, " $1"))  // should increment the $1 when working with more than one capture group...?

// expected output: this Is A Camel Case String  // we add spaces :P.


// Old School Function to Arrow Function
// example old school function: 
function sayHello(first_name, last_name){
    console.log(`Hellow there ${first_name} ${last_name}!`)
}
