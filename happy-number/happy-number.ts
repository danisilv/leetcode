// https://leetcode.com/problems/happy-number/?envType=featured-list&envId=top-interview-questions
export function isHappy(n: number): boolean {
    let nSet = new Set<number>();
    let candidate = n;

    while (!nSet.has(candidate)) {
        nSet.add(candidate);
        let digits = getDigits(candidate);
        
        candidate = 0;
        for (let digit of digits)
            candidate += Math.pow(digit, 2)

        if (candidate == 1)
            return true;

    }

    return false;

};

function getDigits(n: number): number[] {
    if (n < 10)
        return [n];

    let v = Math.floor(n / 10)
    let r = n % 10
    return [...getDigits(v), r]
}