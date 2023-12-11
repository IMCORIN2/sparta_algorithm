function solution(a, b, n) {
  if (n >= a) {
    let total = Math.floor(n / a) * b;

    return total + solution(a, b, total + (n % a));
  } else {
    return 0;
  }
}
