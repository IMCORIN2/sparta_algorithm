function solution(nums) {
  let sumArr = [];
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        sumArr.push(sum);
      }
    }
  }
  sumArr.forEach((el) => {
    let divisor = [];
    for (let l = 1; l <= el; l++) {
      if (el % l === 0) {
        divisor.push(l);
      }
    }

    if (divisor.length === 2) {
      total++;
    }
  });
  console.log(total);
  return total;
}
