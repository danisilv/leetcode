import { expect } from 'chai';
import { maxProfit } from './best-time-to-buy-and-sell-stock';


describe('maxProfit', () => {
  it('should return the maximum profit for the prices [7,1,5,3,6,4]', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const expectedOutput = 5;

    const result = maxProfit(prices);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the maximum profit for the prices [7,6,4,3,1]', () => {
    const prices = [7, 6, 4, 3, 1];
    const expectedOutput = 0;

    const result = maxProfit(prices);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the maximum profit for an empty array of prices', () => {
    const prices: number[] = [];
    const expectedOutput = 0;

    const result = maxProfit(prices);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the maximum profit for the prices [3,2,6,5,0,3]', () => {
    const prices = [3,2,6,5,0,3];
    const expectedOutput = 4;

    const result = maxProfit(prices);

    expect(result).to.equal(expectedOutput);
  });
});
