export function reverseBits(n: number): number {
    let result = 0;
      for (let i = 0; i < 32; i++) {
        result = result * 2 + n % 2;
        n = Math.floor(n / 2);
      }
      return result;
    };