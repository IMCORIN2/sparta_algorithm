// 대충 만든 자판
function solution(keymap, targets) {
  const answer = targets.map((target) => {
    let sum = 0;
    for (let t of target) {
      let arr = [];
      keymap.forEach((key) => {
        if (key.includes(t)) {
          arr.push(key.indexOf(t) + 1);
        }
      });
      if (arr.length === 0) {
        return -1;
      }
      const minValue = Math.min(...arr);

      sum += minValue;
    }

    return sum;
  });
  console.log(answer);
  return answer;
}
solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']);
