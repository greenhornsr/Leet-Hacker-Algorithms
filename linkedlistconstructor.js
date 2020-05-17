// FUNCTION
// Node option 1: functional node creator: 
function FListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function FSLinkedList(head){
    this.head = (head===undefined ? null : head)
}

// OR

// CLASS
// Node option 2: class node creator: 
class CListNode {
    constructor(element){
        this.element = element;
        this.next = null
    }
}

class CSLinkedList {
    constructor() {
        this.head = null; 
        // this.size = 0
    }

    addnode(val){
        const newNode = CListNode(val)
        if(!this.head) {
            this.head = newNode;
        }
        else {
            this.head.next
        }
    }
}
