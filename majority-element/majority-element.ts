//https://leetcode.com/problems/majority-element/?envType=featured-list&envId=top-interview-questions
export function majorityElement(nums: number[]): number {
    if (nums.length ==1)
        return nums[0];

    let freqMap = new Map<number,number>();
    for (let i = 0; i < nums.length; i++){
        let freq = freqMap.get(nums[i]);
        
        if (!freq)
            freqMap.set(nums[i],1)

        else if (freq+1 > nums.length /2)
            return nums[i]

        else
            freqMap.set(nums[i], freq + 1)
    }

    // just to avoid typescript warning
    return 0
};