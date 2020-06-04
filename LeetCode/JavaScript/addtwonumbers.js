// Source: https://leetcode.com/problems/add-two-numbers/


//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    // console.log(l1)
    // console.log(l2)
    let l1num = 0;
    let l2num = 0;
    let result1 = [];
    let result2 = [];
    let l1size = 0;
    let l2size = 0;
    let currl1 = l1;
    let currl2 = l2;
    
    while(currl1){
        l1size +=1
        // console.log("size of l1", l1size)
        result1.push(currl1.val)
        currl1 = currl1.next
    }
    while(currl2){
        l2size +=1
        // console.log("size of l2", l2size)
        result2.push(currl2.val)
        currl2 = currl2.next
    }
    
    let arrlengthresult = l1size > l2size ? l1size - l2size : l2size - l1size
    // console.log(arrlengthresult)
    let resultLL = new ListNode(null); 
    if (arrlengthresult == 0) {
        
        for(let i=0; i<=l1size; i++) {
            if(i === 0) {
                resultLL = new ListNode(result1[i] + result2[i])
                // console.log("TTTT", resultLL)
                continue
            }
            else{
                console.log(i)
                resultLL.next = new ListNode(result1[i] + result2[i])
                console.log(resultLL.next)
            }
        }
        
    }
    // console.log("result LL: ", resultLL)
    // console.log("result1: ", result1)
    // console.log("result 2: ", result2)
    // console.log(resultLL)
    
};

let L1 = [2,4,3]
let L2 = [5,6,4]

let LL1 = new ListNode(null) 
let curr = LL1
for(const num of L1){
    if(curr.val === null) {
        curr.val = num
    }
    console.log(num)
    curr.next = new ListNode(num)
    curr = curr.next
}
console.log("LL1: ", LL1)
let LL2 = new ListNode()
addTwoNumbers()