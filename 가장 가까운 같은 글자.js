function solution(str) {
  let answer = [];
  let newStr = '';
  for (let s of str) {
    if (newStr.includes(s) === false) {
      newStr += s;
      answer.push(-1);
    } else {
      newStr += s;
      answer.push(newStr.lastIndexOf(s) - newStr.lastIndexOf(s, newStr.lastIndexOf(s) - 1));
    }
  }
  return answer;
}
