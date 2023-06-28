import { expect } from 'chai';
import { numJewelsInStones } from './jewels-and-stones';

describe('numJewelsInStones', () => {
  it('deve contar corretamente o número de pedras preciosas', () => {
    const jewels = 'aA';
    const stones = 'aAAbbbb';
    const expectedOutput = 3;
    
    const result = numJewelsInStones(jewels, stones);

    expect(result).to.equal(expectedOutput);
  });

  it('deve retornar 0 se não houver pedras preciosas', () => {
    const jewels = 'z';
    const stones = 'ZZZZ';
    const expectedOutput = 0;
    
    const result = numJewelsInStones(jewels, stones);

    expect(result).to.equal(expectedOutput);
  });

  it('deve retornar 0 se não houver pedras nem jóias', () => {
    const jewels = '';
    const stones = '';
    const expectedOutput = 0;
    
    const result = numJewelsInStones(jewels, stones);

    expect(result).to.equal(expectedOutput);
  });

  it('deve contar corretamente se todas as pedras forem preciosas', () => {
    const jewels = 'aAbBcCdDeEfF';
    const stones = 'aAbBcCdDeEfF';
    const expectedOutput = 12;
    
    const result = numJewelsInStones(jewels, stones);

    expect(result).to.equal(expectedOutput);
  });
});
