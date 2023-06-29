import { expect } from 'chai';

import { ListNode, reverseList } from './reverse-linked-list';

describe('reverseList', () => {
  it('should reverse a linked list correctly', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const reversed = reverseList(head);

    expect(reversed?.val).to.equal(5);
    expect(reversed?.next?.val).to.equal(4);
    expect(reversed?.next?.next?.val).to.equal(3);
    expect(reversed?.next?.next?.next?.val).to.equal(2);
    expect(reversed?.next?.next?.next?.next?.val).to.equal(1);
    expect(reversed?.next?.next?.next?.next?.next).to.be.null;
  });

  it('should return null if the list is empty', () => {
    const head = null;

    const reversed = reverseList(head);

    expect(reversed).to.be.null;
  });

  it('should return the same node if the list has only one element', () => {
    const head = new ListNode(1);

    const reversed = reverseList(head);

    expect(reversed?.val).to.equal(1);
    expect(reversed?.next).to.be.null;
  });
});
