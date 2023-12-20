function solution(x, y) {
  const xMap = new Map();
  const commonElements = [];

  for (const char of x) {
    xMap.set(char, (xMap.get(char) || 0) + 1);
  }

  for (const char of y) {
    if (xMap.has(char) && xMap.get(char) > 0) {
      commonElements.push(char);
      xMap.set(char, xMap.get(char) - 1);
    }
  }

  if (commonElements.length === 0) {
    return '-1';
  }

  if (commonElements.every((v) => v === '0')) {
    return '0';
  }

  const answer = commonElements.sort((a, b) => b - a).join('');
  console.log(answer);
  return answer;
}
