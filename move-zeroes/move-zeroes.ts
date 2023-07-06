/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
    let cursor = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0)
            nums[cursor++] = nums[i]
    }

    for (let i = cursor; i < nums.length; i++)
        nums[i] = 0;

};

