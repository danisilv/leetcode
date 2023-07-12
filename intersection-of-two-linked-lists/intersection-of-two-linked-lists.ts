/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let setA = new Set<ListNode>();
    let setB = new Set<ListNode>();

    while (headA != null || headB !=null ){
        if (headA){
            if (setB.has(headA))
                return headA;
            
            setA.add(headA)
            headA = headA.next;

        }

        if (headB){
            if (setA.has(headB))
                return headB;
            
            setB.add(headB)
            headB = headB.next
        }
    }
    return null;

}

