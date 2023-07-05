export function singleNumber2(nums: number[]): number {
    let numSet = new Map<number,number>();
    let single = nums[0]
    
    for (let i=0; i< nums.length; i++){
        let qty = numSet.get(nums[i])
        if (qty ==1)
            numSet.set(nums[i], qty+1)
        else if (!qty)
            numSet.set(nums[i],1);
    }

    for (let key of numSet.keys()){
        let val = numSet.get(key)
        if ( val == 1){
            single = key;
            break
        }
    }
    return single;
};


export function singleNumber(nums: number[]): number {
    let xor = 0;
  
    for (const num of nums) {
      console.log(`Valor atual de 'xor': ${xor.toString(2)}`);
      console.log(`Número atual: ${num.toString(2)}`);
  
      // Realiza o XOR bit a bit entre o valor atual de `xor` e o número atual (`num`)
      xor = xor ^ num;
  
      console.log(`Resultado do XOR: ${xor.toString(2)}`);
      console.log('------------------------');
    }
  
    return xor;
  }