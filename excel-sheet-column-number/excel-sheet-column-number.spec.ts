import { expect } from 'chai';
import { titleToNumber } from './excel-sheet-column-number';

describe('titleToNumber', () => {
  it('should return the correct column number for "A"', () => {
    const columnTitle = 'A';
    const expectedOutput = 1;

    const result = titleToNumber(columnTitle);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct column number for "AB"', () => {
    const columnTitle = 'AB';
    const expectedOutput = 28;

    const result = titleToNumber(columnTitle);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct column number for "ZY"', () => {
    const columnTitle = 'ZY';
    const expectedOutput = 701;

    const result = titleToNumber(columnTitle);

    expect(result).to.equal(expectedOutput);
  });



  it('should return the correct column number for "FXSHRXW"', () => {
    const columnTitle = 'FXSHRXW';
    const expectedOutput = 2147483647;

    const result = titleToNumber(columnTitle);

    expect(result).to.equal(expectedOutput);
  });
});
