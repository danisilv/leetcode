// https://leetcode.com/problems/contains-duplicate/?envType=featured-list&envId=top-interview-questions
export function containsDuplicate(nums: number[]): boolean {
    let dupSet = new Set();
    for (let i =0; i< nums.length; i++){
        if (dupSet.has(nums[i]))
            return true;
        
        dupSet.add(nums[i])
    }

    return false;
};