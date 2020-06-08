// Source: https://leetcode.com/problems/add-two-numbers/


//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Does NOT work on LeetCode... but works in VSCODE...wtf???
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

// works on LeetCode... but not in VSCODE...WTF???
var addTwoNumbersv2 = function(l1, l2) {
    let string1 = '';
    let string2 = '';
    let currl1 = l1;
    let currl2 = l2;
    
    while(currl1){
        // l1size +=1
        string1 = string1 + currl1.val 
        currl1 = currl1.next
    }
    // console.log("string1: ",string1)
    while(currl2){
        // l2size +=1
        string2 = string2 + currl2.val
        currl2 = currl2.next
    }
    // console.log("string2: ",string2)
    
    let result = (Number(string1) + Number(string2)).toString()

    if (result === 0) {
        return null
    }
    console.log(buildLL(result))
    return buildLL(result)
};



let addTwoNumbers = (l1, l2) => {
    let result = new ListNode(0);
    let cur = result;
    let remainder = 0;
    while(l1 || l2){
        let sum = remainder;
        if(l1){
           sum += l1.val;
           l1 = l1.next; 
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }
        cur.next = new ListNode(sum%10);
        remainder = Math.floor(sum/10);
        cur = cur.next;
    }
    if(remainder > 0){
        cur.next = new ListNode(remainder);
    }
    console.log(result.next)
    return result.next;
};

// TESTS
// let L1 = '243'
// let L2 = '564'
// let L1 = '0'
// let L2 = '0'
let L1 = '98'
let L2 = '1'

// Helper Function
const buildLL = (str) => {
    let LL1 = new ListNode(null) 
    let curr = LL1
    for(let i=str.length-1; i >= 0; i--){
        if(curr.val === null) {
            curr.val = str[i]
            curr.next = new ListNode(null)
        }
        // console.log(num)
        curr = curr.next
    }
    // console.log("LL is: ", LL1)
    return LL1
}

// Test Execution
addTwoNumbers(buildLL(L1), buildLL(L2))