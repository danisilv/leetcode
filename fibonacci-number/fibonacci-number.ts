// https://leetcode.com/problems/fibonacci-number/description/
export function fib(n: number): number {
    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
};


// Versão otimizada
let cache = new Map<number, number>([[0, 0], [1, 1]]);
export function fibCached(n: number): number {

    if (!cache.has(n)) {
        cache.set(n, fib(n - 1) + fib(n - 2));
    }

    return cache.get(n)!;
};