import { expect } from 'chai';
import { reverseBits } from './reverse-bits';

describe('reverseBits', () => {
  it('should return the correct reversed bits for the input 00000010100101000001111010011100', () => {
    const n = 0b00000010100101000001111010011100;
    const expectedOutput = 0b00111001011110000010100101000000;

    const result = reverseBits(n);

    expect(result).to.equal(expectedOutput);
  });

//   it('should return the correct reversed bits for the input 11111111111111111111111111111101', () => {
//     const n = 0b11111111111111111111111111111101;
//     const expectedOutput = 0b10111111111111111111111111111111;

//     const result = reverseBits(n);

//     expect(result).to.equal(expectedOutput);
//   });


  it('should return the correct reversed bits for the input 11111111111111111111111111111101', () => {
    const n = 0b11111111111111111111111111111101;
    const expectedOutput = 3221225471;

    //@ts-ignore
    const result = reverseBits(n);

    expect(result).to.equal(expectedOutput);
  });
});
