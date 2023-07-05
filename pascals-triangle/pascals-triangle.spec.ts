import { expect } from 'chai';
import { generate } from './pascals-triangle';

describe('generatePascal', () => {
  it('should generate the correct Pascal\'s triangle for numRows = 5', () => {
    const numRows = 5;
    const expectedOutput = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ];

    const result = generate(numRows);

    expect(result).to.deep.equal(expectedOutput);
  });

  
  it('should generate a single-row triangle for numRows = 2', () => {
    const numRows = 2;
    const expectedOutput = [[1],[1,1]];

    const result = generate(numRows);

    expect(result).to.deep.equal(expectedOutput);
  });

  it('should generate the correct Pascal\'s triangle for numRows = 3', () => {
    const numRows = 3;
    const expectedOutput = [
      [1],
      [1, 1],
      [1, 2, 1]
    ];

    const result = generate(numRows);

    expect(result).to.deep.equal(expectedOutput);
  });
});
