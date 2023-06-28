/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 
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

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {

    let mergedList = list1 || list2;
    if ( !mergedList || !list1 || !list2 )
        return mergedList;

    if (list1.val > list2.val){
        let tmp = list1;
        list1 = list2;
        list2 = tmp;
        mergedList = list1;
    }

    let next2:ListNode|null = list2;
    let pointer = mergedList;
    while(next2){
        while(pointer.next && pointer.next.val < next2.val){
            pointer = pointer.next
        }
        let tmp = pointer.next;
        pointer.next = new ListNode(next2.val, tmp);
        next2 = next2.next;
    }

    return mergedList
}