import { expect } from 'chai';
import { isPalindrome, ListNode } from './palindrome-linked-list';

describe('isPalindrome', () => {
  it('should return true for a palindrome list', () => {
    // Example of a palindrome list: 1 -> 2 -> 3 -> 2 -> 1
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(2);
    head.next.next.next.next = new ListNode(1);

    const result = isPalindrome(head);

    expect(result).to.be.true;
  });

  it('should return false for a non-palindrome list', () => {
    // Example of a non-palindrome list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const result = isPalindrome(head);

    expect(result).to.be.false;
  });


  it('should return true for a list with a single element', () => {
    const head = new ListNode(1);

    const result = isPalindrome(head);

    expect(result).to.be.true;
  });
});
