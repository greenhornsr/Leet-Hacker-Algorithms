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
    for(const el of loc){
        if(el === 'e'){
            el = e.unshift()
            console.log("TEST LOC", loc)
        }
    }
    console.log("loc", loc)
    console.log("e", e.sort())
    console.log("o", o.sort())
}

solve([8, 13, 11, 90, -5, 4])
