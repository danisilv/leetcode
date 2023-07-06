// https://leetcode.com/problems/missing-number/?envType=featured-list&envId=top-interview-questions
export function missingNumber(nums: number[]): number {
    let size = nums.length;
    nums = nums.sort((a,b) => a-b);
    for (let i = 0; i< size;i++){
        if (nums[i] != i)
            return i;
    }

    return size;
};