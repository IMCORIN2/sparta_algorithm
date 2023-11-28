function solution(food) {
    let answer = "0";
    let result = "";
    for (let i = 1; i < food.length; i++) {
      let repeatTimes = Math.floor(food[i] / 2);
      let stringI = String(i);
  
      result += stringI.repeat(repeatTimes)
      console.log(result)
    }
  
    let reverseResult = result.split("").sort().reverse().join("");
    answer = result + answer + reverseResult;
    return answer;
  };