// Source: https://leetcode.com/problems/add-two-numbers/


//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let string1 = '';
    let string2 = '';
    let currl1 = l1;
    let currl2 = l2;
    
    while(currl1.next){
        // l1size +=1
        string1 = string1 + currl1.val 
        currl1 = currl1.next
    }
    while(currl2.next){
        // l2size +=1
        string2 = string2 + currl2.val
        currl2 = currl2.next
    }
    
    let result = (Number(string1) + Number(string2)).toString()

    if (result === 0) {
        return null
    }
    console.log(buildLL(result))
    return buildLL(result)
};

// TESTS
let L1 = '243'
let L2 = '564'

// Helper Function
const buildLL = (str) => {
    let LL1 = new ListNode(null) 
    let curr = LL1
    for(const num of str){
        if(curr.val === null) {
            curr.val = num
        }
        // console.log(num)
        curr.next = new ListNode(null)
        curr = curr.next
    }
    // console.log("LL is: ", LL1)
    return LL1
}

// Test Execution
addTwoNumbers(buildLL(L1), buildLL(L2))