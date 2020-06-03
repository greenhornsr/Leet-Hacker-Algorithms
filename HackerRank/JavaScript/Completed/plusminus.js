// Source: https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;

    for(const num of arr) {
        if(num === 0) {
            zero += 1
        }
        else if(num > 0) {
            pos += 1
        }
        else if (num < 0) {
            neg += 1
        }
    }
    console.log(pos/arr.length)
    console.log(neg/arr.length)
    console.log(zero/arr.length)
}

let inputarray = [ -4, 3, -9, 0, 4, 1 ]
plusMinus(inputarray)