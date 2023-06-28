
export function numJewelsInStones(jewels: string, stones: string): number {
    let qtyEqual = 0

    for (let letterJ of jewels) {
        for (let letterS of stones) {
            if (letterJ == letterS)
                qtyEqual++
        }
    }
    return qtyEqual;
};