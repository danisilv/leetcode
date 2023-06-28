import { expect } from 'chai';
import { countNegatives } from './count-negative-numbers-in-a-sorted-matrix';


describe('countNegatives', () => {
  it('deve contar corretamente o número de números negativos', () => {
    const grid = [
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3]
    ];
    const expectedOutput = 8;
    
    const result = countNegatives(grid);

    expect(result).to.equal(expectedOutput);
  });

  it('deve retornar 0 se não houver números negativos', () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const expectedOutput = 0;
    
    const result = countNegatives(grid);

    expect(result).to.equal(expectedOutput);
  });

  it('deve contar corretamente se a matriz for vazia', () => {
    const grid: number[][] = [];
    const expectedOutput = 0;
    
    const result = countNegatives(grid);

    expect(result).to.equal(expectedOutput);
  });

  it('deve contar corretamente se todas as linhas tiverem apenas números negativos', () => {
    const grid = [
      [-1, -2, -3],
      [-4, -5, -6],
      [-7, -8, -9]
    ];
    const expectedOutput = 9;
    
    const result = countNegatives(grid);

    expect(result).to.equal(expectedOutput);
  });
});
