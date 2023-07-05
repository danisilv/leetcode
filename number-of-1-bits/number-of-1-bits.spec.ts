import { expect } from 'chai';
import { hammingWeight } from './number-of-1-bits';

describe('hammingWeight', () => {
    it('should return the correct hamming weight for n = 7', () => {
        const n = 7;
        const expectedOutput = 3;

        const result = hammingWeight(n);

        expect(result).to.equal(expectedOutput);
    });
    it('should return the correct hamming weight for n = 128', () => {
        const n = 128;
        const expectedOutput = 1;

        const result = hammingWeight(n);

        expect(result).to.equal(expectedOutput);
    });

    it('should return 0 for n = 0', () => {
        const n = 0;
        const expectedOutput = 0;

        const result = hammingWeight(n);

        expect(result).to.equal(expectedOutput);
    });

    it('should return 0 for n = 1', () => {
        const n = 1;
        const expectedOutput = 1;

        const result = hammingWeight(n);

        expect(result).to.equal(expectedOutput);
    });

    it('should return the correct hamming weight for n = 4294967293', () => {
        const n = 4294967293;
        const expectedOutput = 31;

        const result = hammingWeight(n);

        expect(result).to.equal(expectedOutput);
    });


});
