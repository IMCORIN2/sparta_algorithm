function solution(number, limit, power) {
  let numArr = [];
  let powerArr = [];
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    numArr.push(i);
  }
  numArr.forEach((num) => {
    let divisor = 0;
    for (let j = 1; j <= Math.sqrt(num); j++) {
      if (num % j === 0) divisor++;
    }
    // console.log('divisor', divisor);
    if (num % Math.sqrt(num) === 0) {
      powerArr.push(2 * divisor - 1);
    } else {
      powerArr.push(2 * divisor);
    }
  });
  // console.log('powerArr', powerArr);
  powerArr.forEach((el) => {
    if (el <= limit) {
      answer += el;
    } else {
      answer += power;
    }
  });
  // console.log('answer', answer);
  return answer;
}
