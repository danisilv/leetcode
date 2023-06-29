// https://leetcode.com/problems/palindrome-linked-list/
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

function reverseList(head: ListNode | null): ListNode | null {
    let nextNode = null;
    let previousNode = null;
    while (head) {
        nextNode = head.next;
        head.next = previousNode;
        previousNode = head;
        head = nextNode;
    }
    return previousNode;
};

export function isPalindrome(head: ListNode | null): boolean {

    if (!head || !head.next) return true;

    // pegar a metade e inverter a segunda metade
    let firtHalf = head;
    let fastPace =  head;
    while (firtHalf.next && fastPace?.next?.next){
        firtHalf = firtHalf.next;
        fastPace = fastPace.next.next
    }
    let secondHalfReversed = reverseList(firtHalf.next);

    while (secondHalfReversed){
        if (head?.val != secondHalfReversed.val)
            return false;
        head = head?.next;
        secondHalfReversed = secondHalfReversed.next
    }

    return true;
};

