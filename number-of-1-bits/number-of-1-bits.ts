//https://leetcode.com/problems/number-of-1-bits/?envType=featured-list&envId=top-interview-questions
export function hammingWeight(n: number): number {
    if (n ==0)
        return 0;

    let rest = n % 2
    let val = Math.floor(n / 2)

    return hammingWeight(val) + rest;
};