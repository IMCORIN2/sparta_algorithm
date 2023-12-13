// 소수만들기
function solution(nums) {
  let sumArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        console.log(`i는 ${nums[i]} j는 ${nums[j]} k는 ${nums[k]}`, sum);
      }
    }
  }

  sumArr.forEach((sum)=> {
    sum
  })
  console.log(sumArr);
  return sumArr;
}
solution([1, 2, 3, 4]);
