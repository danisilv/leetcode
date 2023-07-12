//https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=featured-list&envId=top-interview-questions
export function removeDuplicates(nums: number[]): number {
    let uniqSet = new Set<number>()
    for (let num of nums){
        uniqSet.add(num)
    }
    let i = 0;
    for (let key of uniqSet.keys()) {
        nums[i] = key;
        i++;
    }
    return uniqSet.size;
};