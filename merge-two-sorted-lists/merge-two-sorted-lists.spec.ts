import { expect } from 'chai';
import { ListNode, mergeTwoLists } from './merge-two-sorted-lists';


describe('mergeTwoLists', () => {
  it('deve mesclar duas listas corretamente', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const expectedOutput = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));
    
    const result = mergeTwoLists(list1, list2);

    expect(result).to.deep.equal(expectedOutput);
  });

  it('deve mesclar duas listas corretamente 2', () => {
    const list1 = new ListNode(2, null);
    const list2 = new ListNode(1, null);
    const expectedOutput = new ListNode(1, new ListNode(2,null)) 
    
    const result = mergeTwoLists(list1, list2);

    expect(result).to.deep.equal(expectedOutput);
  });

  it('deve retornar a primeira lista se a segunda lista for nula', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
    const list2 = null;
    
    const result = mergeTwoLists(list1, list2);

    expect(result).to.deep.equal(list1);
  });

  it('deve retornar a segunda lista se a primeira lista for nula', () => {
    const list1 = null;
    const list2 = new ListNode(1, new ListNode(2, new ListNode(3)));
    
    const result = mergeTwoLists(list1, list2);

    expect(result).to.deep.equal(list2);
  });

  it('deve retornar null se ambas as listas forem nulas', () => {
    const list1 = null;
    const list2 = null;
    
    const result = mergeTwoLists(list1, list2);

    expect(result).to.be.null;
  });
});
