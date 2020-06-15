// SOURCE: https://binarysearch.io/room/vim-greater-emacs-15503

function solve1(nums) {
    let len = nums.length
    let e = null;
    let o = null;
    // for(const num of nums){
    //     num%2===0?newnums.push('e'):newnums.push('o')
    // }
    for(let i = 0; i<len; i++){
        let min = i
        if(e === null && nums[i] % 2 === 0){
            e = i
        }
        else if(o === null && nums[i] % 2 !== 0){
            o = i
        }
        if(nums[i]%2===0){
            [nums[e], nums[i]] = [nums[i], nums[e]]
        }
        else if(nums[i]%2 !== 0){
            [nums[o], nums[i]] = [nums[i], nums[o]]
        }
    }
    console.log(nums)
}

function solve(nums) {
    let loc = []
    let e = []
    let o = []
    let result = []

    for(const el of nums){
        if(el%2===0){
            loc.push('e')
            e.push(el)
        }
        else{
            loc.push('o')
            o.push(el)
        }
    }
    e.sort((a,b) => a-b)
    o.sort((a,b) => b-a)
    for(const el of loc){
        if(el === 'e'){
            // console.log(e.shift())
            result.push(e.shift())
            // console.log("TEST RESULT", result)
        }
        else if(el === 'o'){
            // console.log(e.shift())
            result.push(o.shift())
            // console.log("TEST RESULT", result)
        }
    }
    console.log("FINAL: ", result)
    return result
}

// WORKS?  untested against site...
solve([8, 13, 11, 90, -5, 4])
solve([10, 91, 110, 901, -7, 14])
