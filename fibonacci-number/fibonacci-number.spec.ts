import { expect } from 'chai';
import { fib } from './fibonacci-number';

describe('fib', () => {
  it('should return the correct Fibonacci number', () => {
    const result = fib(3);
    expect(result).to.equal(2);
  });

  it('should return 0 for n equal to 0', () => {
    const result = fib(0);
    expect(result).to.equal(0);
  });

  it('should return 1 for n equal to 1', () => {
    const result = fib(1);
    expect(result).to.equal(1);
  });

  it('should return 1 for n equal to 2', () => {
    const result = fib(2);
    expect(result).to.equal(1);
  });

  it('should return 55 for n equal to 10', () => {
    const result = fib(10);
    expect(result).to.equal(55);
  });
});
