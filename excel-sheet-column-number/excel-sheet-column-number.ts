//https://leetcode.com/problems/excel-sheet-column-number/?envType=featured-list&envId=top-interview-questions
export function titleToNumber(columnTitle: string): number {
    let size = columnTitle.length
    let output = 0
    for (let i = size-1, j=0; i>= 0; i--,j++){
        let ascii = columnTitle[i].charCodeAt(0) -64;
        output += ascii*Math.pow(26,j) 
    }
    return output
};