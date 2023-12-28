function solution(s) {
  let firstWord = s[0];
  let count = 0;
  let answer = 0;
  function splitWords(s) {
    for (let i = 0; i < s.length; i++) {
      // console.log("s",s)
      // console.log("s[i]",s[i])
      // console.log("firstWord",firstWord)
      if (s[i] === firstWord) {
        count++;
      } else {
        count--;
      }

      // console.log(`count${i}: ${count}`)

      if (count === 0) {
        firstWord = s[i + 1];
        // console.log("newFirstWord",firstWord)
        const slicedString = s.slice(i + 1);
        answer++;
        // console.log("answer",answer)

        return splitWords(slicedString);
      }
      if (i === s.length - 1 && s.lenght % 2 !== 0) {
        answer++;
      }
    }
  }
  splitWords(s);
  // console.log(answer);
  return answer;
}
solution('banana');
