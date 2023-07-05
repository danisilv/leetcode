//https://leetcode.com/problems/reverse-string/?envType=featured-list&envId=top-interview-questions


/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
    let tmp = '';
    let sizeS = s.length -1;

    for (let i =0; i< sizeS; i++){
        tmp = s[sizeS];
        s[sizeS] = s[i];
        s[i] = tmp;
        sizeS--;
    }
    
 };