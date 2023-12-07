function solution(numbers) {
  let answer = [];
  const sum = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        sum.add(numbers[i] + numbers[j]);
      }
    }
  }
  sum.forEach((el) => {
    answer.push(el);
  });
  answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}
