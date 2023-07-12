// https://leetcode.com/problems/intersection-of-two-arrays-ii/?envType=featured-list&envId=top-interview-questions
export function intersect(nums1: number[], nums2: number[]): number[] {

    let mapNums1 = new Map<number,number>()
    let mapNums2 = new Map<number,number>()

    for (let i =0; i< nums1.length; i++){
        let freq = mapNums1.get(nums1[i])|| 0;
        mapNums1.set(nums1[i],freq+1)
    }

    for (let i =0; i< nums2.length; i++){
        let freq = mapNums2.get(nums2[i])|| 0;
        mapNums2.set(nums2[i],freq+1)
    }

    let output:number[] = []

    for (let key of mapNums1.keys()){
        let freq1 = mapNums1.get(key);
        let freq2 = mapNums2.get(key);

        if (!freq1 || !freq2)
            continue;

        let minFreq = Math.min(freq1,freq2);
        output = output.concat(Array(minFreq).fill(key))
    }

    return output;        
};