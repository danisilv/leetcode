// https://leetcode.com/problems/pascals-triangle/?envType=featured-list&envId=top-interview-questions
export function generate(numRows: number): number[][] {
    let pascal = [[1]]

    if (numRows == 1)
        return pascal

    for (let i = 0; i<numRows-1; i++){
        let sizePreviusRow = pascal[i].length;
        let newRow = []
        newRow[0] = 1;
        newRow[sizePreviusRow] = 1

        for (let j = 1; j < sizePreviusRow ; j++){
            newRow[j] = pascal[i][j-1] + pascal[i][j]
        }
        
        pascal.push(newRow)
    }

    return pascal;

};