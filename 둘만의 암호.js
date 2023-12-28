function solution(s, skip, index) {
  const strArr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ].filter((v) => !skip.includes(v));

  return s
    .split('')
    .map((v) => strArr[(strArr.indexOf(v) + index) % strArr.length])
    .join('');
}
