// SOURCE: https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
// DIFFICULTY: ??

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

function capitalize(s){
    // Declare two variables to hold onto the modified strings
    let even_str = '';
    let odd_str = '';
    
    // Loop through the input string;
    for(let i=0; i<s.length; i++) {
        // evens - capitalize evens, lowercase odds and append result to even_str variable
        i % 2 === 0 ? even_str += s[i].toUpperCase() : even_str += s[i].toLowerCase();
        // odds - capitalize odds, lowercase evens and append result to odd_str variable
        i % 2 === 0 ? odd_str += s[i].toLowerCase() : odd_str += s[i].toUpperCase();
    }
    console.log([even_str, odd_str])
    return [even_str, odd_str];
};

// COMPLETED, PASSES!
    // Completed in under 5 minutes
    // Processes in under 20ms; passes 106/106; zero fails.

// TESTS
const input_str = "abcEFOIaliefnaeoahufeEEHOFELMaefgiqqqhenkjnlvnvzlkaLdef"
capitalize(input_str)