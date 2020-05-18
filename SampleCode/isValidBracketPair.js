// Source: https://repl.it/student/submissions/12648442

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
            if(last === '[' && el === ']'){
                check_arr.pop();
            }    
            if(last === '{' && el === '}'){
                check_arr.pop();
            }
        }
    }
    console.log(check_arr.length > 0 ? false : true)
    return check_arr.length > 0 ? false : true;
};

// COMPLETED, PASSES!
// TESTS
const valstr = '{[()]}'
const invalstr = '{[(()]}'
isValid(valstr)
isValid(invalstr)