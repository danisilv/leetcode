//https://leetcode.com/problems/climbing-stairs/?envType=featured-list&envId=top-interview-questions
const cache:any = {0: 0, 1: 1, 2: 2};
export function climbStairs(n: number): number {
    if (cache[n]) return cache[n];
    return cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
}


