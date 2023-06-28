import { expect } from 'chai';
import { uniqueMorseRepresentations } from './unique-morse-code-words';

describe('uniqueMorseRepresentations', () => {
  it('should return the correct number of unique Morse code representations', () => {
    const words = ['gin', 'zen', 'gig', 'msg'];
    const expectedOutput = 2;
    
    const result = uniqueMorseRepresentations(words);

    expect(result).to.equal(expectedOutput);
  });

  it('should return 0 if there are no words', () => {
    const words: string[] = [];
    const expectedOutput = 0;
    
    const result = uniqueMorseRepresentations(words);

    expect(result).to.equal(expectedOutput);
  });

  it('should return 1 if all words have the same Morse code representation', () => {
    const words = ['abc', 'abc', 'abc'];
    const expectedOutput = 1;
    
    const result = uniqueMorseRepresentations(words);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the total number of words if all words are unique', () => {
    const words = ['hello', 'world', 'openai', 'gpt', 'three'];
    const expectedOutput = 5;
    
    const result = uniqueMorseRepresentations(words);

    expect(result).to.equal(expectedOutput);
  });
});
