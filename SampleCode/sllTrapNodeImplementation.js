// This is JAVA way of doing trap node on a singly linked list to find a merge node.  Needs modified to work in js.

class Solution {
    hasCycle(ListNode head) {
        /*
            check to see if next element is equal to null as we iterate,
            return false in this case
            modify each node's next pointer to point to the head of the list,
            if we reach a node, and their next either points to the head or the next next
            point to head, then we've reached a cycle.
         */
        if(head == null) return false; 
        ListNode node = head;
        while(node.next != null){
            //save next pointer of each node, while we modify it after to point to start of list
            ListNode temp = node.next;
            if(temp == head || temp.next == head){
                return true;
            }
            node.next = head;
            node = temp;
        }
        return false;
    }
}