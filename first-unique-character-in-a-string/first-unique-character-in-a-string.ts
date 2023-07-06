// https://leetcode.com/problems/first-unique-character-in-a-string/?envType=featured-list&envId=top-interview-questions
export function firstUniqChar(s: string): number {

    let freqSet = new Map<string, {freq: number; offset: number }>();
    for (let i=0; i< s.length; i++){
        let val = freqSet.get(s[i])?.freq || 0;
        freqSet.set(s[i],{freq:val+1, offset: i})
    }

    for (let key of freqSet.keys()){
        let val = freqSet.get(key);
        if (val?.freq ==1)
            return val.offset;
    }

    return -1

};