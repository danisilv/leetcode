import { expect } from 'chai';
import { isHappy } from './happy-number';


describe('isHappy', () => {
  it('should return true for a happy number: 19', () => {
    const n = 19;
    const expectedOutput = true;

    const result = isHappy(n);

    expect(result).to.equal(expectedOutput);
  });

  it('should return false for an unhappy number: 2', () => {
    const n = 2;
    const expectedOutput = false;

    const result = isHappy(n);

    expect(result).to.equal(expectedOutput);
  });

  it('should return true for a happy number: 7', () => {
    const n = 7;
    const expectedOutput = true;

    const result = isHappy(n);

    expect(result).to.equal(expectedOutput);
  });

  it('should return false for an unhappy number: 0', () => {
    const n = 0;
    const expectedOutput = false;

    const result = isHappy(n);

    expect(result).to.equal(expectedOutput);
  });
});
