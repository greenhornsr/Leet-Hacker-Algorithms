// SOURCE:  ARRON MARSHALL - Showing off his word can be a palindrome solution

const palindromePermutation = string => {
    const ht = {};
    let sum = 0;

    for (char of string) {
        // toggle the char in or out of hashtable.  if it is there, remove, if it isn't add.
        ht[char] = !ht[char];
        // if char in hash, sum = 1, else sum = 0.
        sum += ht[char] ? 1 : -1;
    }
    console.log(sum)
    console.log(string.length % 2 === 0 ? sum === 0 : sum <= 1);
    return string.length % 2 === 0 ? sum === 0 : sum <= 1;
};

palindromePermutation("carrs")
palindromePermutation("carrace")