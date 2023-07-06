import { expect } from 'chai';
import { moveZeroes } from './move-zeroes';


describe('moveZeroes', () => {
  it('should move all zeroes to the end of the array [0, 1, 0, 3, 12]', () => {
    let nums = [0, 1, 0, 3, 12];
    const expectedOutput = [1, 3, 12, 0, 0];

    moveZeroes(nums);

    expect(nums).to.deep.equal(expectedOutput);
  });

  it('should not modify the array [1, 2, 3, 4, 5]', () => {
    const nums = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];

    moveZeroes(nums);

    expect(nums).to.deep.equal(expectedOutput);
  });

  it('should move all zeroes to the end of the array [0, 0, 0, 0, 0]', () => {
    const nums = [0, 0, 0, 0, 0];
    const expectedOutput = [0, 0, 0, 0, 0];

    moveZeroes(nums);

    expect(nums).to.deep.equal(expectedOutput);
  });

  it('should move all zeroes to the end of the array [1, 0, 2, 0, 3]', () => {
    const nums = [1, 0, 2, 0, 3];
    const expectedOutput = [1, 2, 3, 0, 0];

    moveZeroes(nums);

    expect(nums).to.deep.equal(expectedOutput);
  });


  it('should move all zeroes to the end of the array [0]', () => {
    const nums = [0];
    const expectedOutput = [0];

    moveZeroes(nums);

    expect(nums).to.deep.equal(expectedOutput);
  });
});
