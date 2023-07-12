import { expect } from 'chai';
import { getIntersectionNode, ListNode } from './intersection-of-two-linked-lists';


describe('getIntersectionNode', () => {
    it('should return the intersection node for two linked lists with an intersection [4,1,8,4,5] and [5,6,1,8,4,5]', () => {
        // Linked list 1: 4 -> 1 -> 8 -> 4 -> 5
        // Linked list 2: 5 -> 6 -> 1 -> 8 -> 4 -> 5
        const list1 = new ListNode(4);
        list1.next = new ListNode(1);
        list1.next.next = new ListNode(8);
        list1.next.next.next = new ListNode(4);
        list1.next.next.next.next = new ListNode(5);

        const list2 = new ListNode(5);
        list2.next = new ListNode(6);
        list2.next.next = list1.next.next;
        list2.next.next.next = list1.next.next.next;
        list2.next.next.next.next = list1.next.next.next.next;

        const expectedOutput = list1.next.next; // Intersection node: 8

        const result = getIntersectionNode(list1, list2);

        expect(result).to.equal(expectedOutput);
    });
    it('should return the intersection node for two linked lists with an intersection', () => {
        // Linked list 1: 1 -> 2 -> 3 -> 4 -> 5
        // Linked list 2: 6 -> 7 -> 4 -> 5
        const list1 = new ListNode(1);
        list1.next = new ListNode(2);
        list1.next.next = new ListNode(3);
        list1.next.next.next = new ListNode(4);
        list1.next.next.next.next = new ListNode(5);

        const list2 = new ListNode(6);
        list2.next = new ListNode(7);
        list2.next.next = list1.next.next.next;
        list2.next.next.next = list1.next.next.next.next;

        const expectedOutput = list1.next.next.next; // Intersection node: 4

        const result = getIntersectionNode(list1, list2);

        expect(result).to.equal(expectedOutput);
    });

    it('should return null for two linked lists without an intersection', () => {
        // Linked list 1: 1 -> 2 -> 3 -> 4 -> 5
        const list1 = new ListNode(1);
        list1.next = new ListNode(2);
        list1.next.next = new ListNode(3);
        list1.next.next.next = new ListNode(4);
        list1.next.next.next.next = new ListNode(5);

        // Linked list 2: 6 -> 7 -> 8 -> 9
        const list2 = new ListNode(6);
        list2.next = new ListNode(7);
        list2.next.next = new ListNode(8);
        list2.next.next.next = new ListNode(9);

        const expectedOutput = null; // No intersection

        const result = getIntersectionNode(list1, list2);

        expect(result).to.equal(expectedOutput);
    });

    it('should return null for two empty linked lists', () => {
        const list1: ListNode | null = null;
        const list2: ListNode | null = null;

        const expectedOutput = null; // No intersection

        const result = getIntersectionNode(list1, list2);

        expect(result).to.equal(expectedOutput);
    });
});
