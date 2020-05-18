// Source: https://repl.it/student/submissions/12648442

// Does NOT CHECK FOR PIPES
var isValid = function(str) {
    let check_arr = [];
    for(const el of str){
        if(el === '(' || el === '[' || el === '{'){
            check_arr.push(el);
        }
        else if(check_arr.length){
            let last = check_arr[check_arr.length-1]
            if(last === '(' && el === ')'){
                check_arr.pop();
            }
            else if(last === '[' && el === ']'){
                check_arr.pop();
            }    
            else if(last === '{' && el === '}'){
                check_arr.pop();
            }
        }
    }
    console.log(check_arr.length ? false : true)
    return check_arr.length ? false : true;
};

// Includes check for '|'
var isValidPlusPipes = function(str) {
    let check_arr = [];
    for(const el of str){
        let last = check_arr[check_arr.length-1]
        if(el === '(' || el === '[' || el === '{'){
            check_arr.push(el);
        }
        if(el === '|' && last !== '|'){
            check_arr.push(el)
        }
        else if(check_arr.length){
            
            if(last === '(' && el === ')'){
                check_arr.pop();
            }
            else if(last === '[' && el === ']'){
                check_arr.pop();
            }    
            else if(last === '{' && el === '}'){
                check_arr.pop();
            }
            else if(last === '|' && el === '|'){
                check_arr.pop()
            }
        }
    }
    console.log(check_arr.length ? false : true)
    return check_arr.length ? false : true;
};

// COMPLETED, PASSES!
// TESTS without Pipes |X|
const valstr = '{[()]}'
const invalstr = '{[(()]}'
isValid(valstr)
isValid(invalstr)

// TESTS with Pipes ||
const valstrpluspipes = '{[(||)]}'
const invalstrpluspipes = '{[(|(|)|)]}'
isValidPlusPipes(valstr)
isValidPlusPipes(invalstr)