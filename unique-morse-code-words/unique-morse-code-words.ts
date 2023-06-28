// https://leetcode.com/problems/unique-morse-code-words/

export function uniqueMorseRepresentations(words: string[]): number {
let table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
let morses = new Set();

for (let word of words){
    let morse = '';
    for (let letter of word){
        let ascii = letter.charCodeAt(0);
        morse += table[ascii-97]
    }
    morses.add(morse);
}
    return morses.size;

}