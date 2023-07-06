//https://leetcode.com/problems/valid-anagram/?envType=featured-list&envId=top-interview-questions
export function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length)
        return false;

    let sMap = new Map<string,number>()
    let tMap = new Map<string,number>()

    for (let i = 0; i < s.length; i++){
        let valS = sMap.get(s[i]) || 0;
        sMap.set(s[i],valS+1)

        let valT = tMap.get(t[i]) || 0;
        tMap.set(t[i],valT+1)

    }

    for (let key of sMap.keys()){
        let valS = sMap.get(key) || 0;
        let valT = tMap.get(key) || 0;

        if (valS > valT)
            return false;
    }

    return true;
};