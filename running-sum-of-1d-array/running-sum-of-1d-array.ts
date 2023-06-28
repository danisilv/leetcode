export function runningSum(nums: number[]): number[] {

    let output: number[] = []
    let acc = 0;

    for (let i =0; i< nums.length; i++){
        acc +=nums[i]
        output.push( acc)
        
    }

    return output;

};