import { expect } from 'chai';
import { romanToInt } from './roman-to-integer';


describe('romanToInt', () => {
  it('should return the correct integer value for the roman numeral "III"', () => {
    const s = 'III';
    const expectedOutput = 3;

    const result = romanToInt(s);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct integer value for the roman numeral "IV"', () => {
    const s = 'IV';
    const expectedOutput = 4;

    const result = romanToInt(s);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct integer value for the roman numeral "IX"', () => {
    const s = 'IX';
    const expectedOutput = 9;

    const result = romanToInt(s);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct integer value for the roman numeral "LVIII"', () => {
    const s = 'LVIII';
    const expectedOutput = 58;

    const result = romanToInt(s);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct integer value for the roman numeral "MCMXCIV"', () => {
    const s = 'MCMXCIV';
    const expectedOutput = 1994;

    const result = romanToInt(s);

    expect(result).to.equal(expectedOutput);
  });
});
