import { expect } from 'chai';
import { runningSum } from './running-sum-of-1d-array';


describe('runningSum', () => {
  it('deve retornar a soma acumulada corretamente', () => {
    const nums = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 3, 6, 10, 15];
    
    const result = runningSum(nums);

    expect(result).to.deep.equal(expectedOutput);
  });

  it('deve retornar um array vazio se a entrada for vazia', () => {
    const nums: number[] = [];
    const expectedOutput: number[] = [];
    
    const result = runningSum(nums);

    expect(result).to.deep.equal(expectedOutput);
  });

  it('deve retornar o mesmo número se a entrada tiver apenas um elemento', () => {
    const nums = [10];
    const expectedOutput = [10];
    
    const result = runningSum(nums);

    expect(result).to.deep.equal(expectedOutput);
  });

  it('deve funcionar corretamente com números negativos', () => {
    const nums = [5, -3, 8, -2, 4];
    const expectedOutput = [5, 2, 10, 8, 12];
    
    const result = runningSum(nums);

    expect(result).to.deep.equal(expectedOutput);
  });
});
