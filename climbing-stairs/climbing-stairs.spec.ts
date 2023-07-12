import { expect } from 'chai';
import { climbStairs } from './climbing-stairs';

describe('climbStairs', () => {
  it('should return the number of distinct ways to climb 2 stairs', () => {
    const n = 2;
    const expectedOutput = 2;

    const result = climbStairs(n);

    expect(result).to.equal(expectedOutput);
  });


  it('should return the number of distinct ways to climb 4 stairs', () => {
    const n = 4;
    const expectedOutput = 5;

    const result = climbStairs(n);

    expect(result).to.equal(expectedOutput);
  });


});
