// https://leetcode.com/problems/roman-to-integer/?envType=featured-list&envId=top-interview-questions
export function romanToInt(s: string): number {
    let tableMap = new Map<string, number>(
        [
            ['I', 1],
            ['V', 5],
            ['X', 10],
            ['L', 50],
            ['C', 100],
            ['D', 500],
            ['M', 1000],

            ['IV', 4], ['IX', 9],
            ['XL', 40], ['XC', 90],
            ['CD', 400], ['CM', 900],
        ]
    )
    let output = 0;
    for (let i = 0; i < s.length;) {

        let doubleVal = i < s.length ? tableMap.get(s[i] + s[i + 1]) : null;
        let val = tableMap.get(s[i]) || 0

        if (doubleVal) {
            output += doubleVal;
            i += 2
        }
        else {
            output += val;
            i++
        }

    }

    return output;
};