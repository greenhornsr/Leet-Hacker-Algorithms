//  removekthnodefromsll.js

class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class SinglyLinkeList{
    constructor(){
        this.head = null;
    }
    add_node(num) {
        const node = new Node();
        let curr;

        if(this.head === null){
            this.head = node;
        }
        else{
            curr = this.head

            while (curr.next){
                curr = curr.next
            }
    
            curr.next = node
        }
    }
}


function removeKthLinkedListNode(head, k) {
    // console.log(k)
    let curr = head
    let prev = null
    let target = null
    let count = 1
    let length = 0

    //  I need length minus k
    //  Can i do this in a single pass?
    while(curr.next !== null){
        if(count === k-1){
            prev = curr
        }
        else if(count < k){
            count +=1
        }
        else if(count === k){
            curr = curr.next
            target = head
            continue
        }
        prev = target
        curr = curr.next
        if(target !== null){
            target = target.next
        }
    }
}

arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]
sl = new SinglyLinkeList()
arr.forEach(el => {
    sl.add_node(el)
});


removeKthLinkedListNode(sl.head, 4)