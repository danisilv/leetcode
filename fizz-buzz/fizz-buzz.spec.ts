import { expect } from 'chai';
import { fizzBuzz } from './fizz-buzz';


describe('fizzBuzz', () => {
    it('should return the correct FizzBuzz sequence for n = 3', () => {
        const n = 3;
        const expectedOutput = ["1", "2", "Fizz"]

        const result = fizzBuzz(n);

        expect(result).to.deep.equal(expectedOutput);
    });


    
    it('should return the correct FizzBuzz sequence for n = 15', () => {
        const n = 15;
        const expectedOutput = [
            "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"
        ];

        const result = fizzBuzz(n);

        expect(result).to.deep.equal(expectedOutput);
    });

    it('should return an empty array for n = 0', () => {
        const n = 0;
        const expectedOutput: string[] = [];

        const result = fizzBuzz(n);

        expect(result).to.deep.equal(expectedOutput);
    });

    it('should return the correct FizzBuzz sequence for n = 30', () => {
        const n = 30;
        const expectedOutput = [
            "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz",
            "16", "17", "Fizz", "19", "Buzz", "Fizz", "22", "23", "Fizz", "Buzz", "26", "Fizz", "28", "29", "FizzBuzz"
        ];

        const result = fizzBuzz(n);

        expect(result).to.deep.equal(expectedOutput);
    });



});
