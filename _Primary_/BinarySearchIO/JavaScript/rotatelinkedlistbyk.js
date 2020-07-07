// SOURCE:  https://binarysearch.io/room/Bits-N-Bytes-22035
// DIFFICULTY: MEDIUM (15 minute limit)

/*
Rotate linked list by k
Given a linked list and a positive integer k, rotate the list to the right by k places.

For example, Given the linked list 1 → 2 → 3 → 4 → 5 → 6 and k = 2, it should become 5 → 6 → 1 → 2 → 3 → 4.

Note: The linked list is guaranteed to have at least one element, and k is guaranteed to be less than or equal to the length of the list.
*/

class LLNode {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}

function solve(node, k) {
    // Write your code here
    if(k === 0) {
        return node
    }

    let curr = node
    let chaser = curr
    let list_length = 1
    
    while(curr.next) {
        curr = curr.next
        list_length += 1
        
        if(list_length > k+1) {
            chaser = chaser.next
        }
    }
    if(k === list_length) {
        return node
    }
    let new_head = chaser.next
    chaser.next = null; 
    curr.next = node
    node = new_head
    console.log(node)
    return node
}
// COMPLETED, PASSED!
    // Completed in 1hr, 10 minutes...

/*
Success!
Your submission took 1 millisecond.
Your submission was faster than 100.00% of other javascript submissions for this question.
*/
