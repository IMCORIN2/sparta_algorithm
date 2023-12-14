// 이렇게 푸는거 진짜 안좋아하는데,,, if에서 너무 짜증나게 굴어서 박치기해버렸다....
function solution(answers) {
  let first = [];
  let second = [];
  let third = [];
  let correct1 = 0;
  let correct2 = 0;
  let correct3 = 0;

  for (let i = 1; i <= answers.length; i++) {
    switch (i % 5) {
      case 1:
        first.push(1);
        break;
      case 2:
        first.push(2);
        break;
      case 3:
        first.push(3);
        break;
      case 4:
        first.push(4);
        break;
      case 0:
        first.push(5);
        break;
      default:
        console.log('Error1');
    }
    switch (i % 10) {
      case 1:
        third.push(3);
        break;
      case 2:
        third.push(3);
        break;
      case 3:
        third.push(1);
        break;
      case 4:
        third.push(1);
        break;
      case 5:
        third.push(2);
        break;
      case 6:
        third.push(2);
        break;
      case 7:
        third.push(4);
        break;
      case 8:
        third.push(4);
        break;
      case 9:
        third.push(5);
        break;
      case 0:
        third.push(5);
        break;
      default:
        console.log('Error3');
    }
    if (i % 2 === 1) {
      second.push(2);
      continue;
    }
    switch (i % 8) {
      case 2:
        second.push(1);
        break;
      case 4:
        second.push(3);
        break;
      case 6:
        second.push(4);
        break;
      case 0:
        second.push(5);
        break;
      default:
        console.log('Error2');
    }
  }

  // console.log('firstArr =====>', first);
  // console.log('secondArr =====>', second);
  // console.log('thirdArr =====>', third);

  answers.forEach((el, idx) => {
    if (el === first[idx]) {
      correct1++;
    }
    if (el === second[idx]) {
      correct2++;
    }
    if (el === third[idx]) {
      correct3++;
    }
  });
  // console.log('correct1', correct1);
  // console.log('correct2', correct2);
  // console.log('correct3', correct3);
  const result = [correct1, correct2, correct3]
    .map((el, idx) => {
      if (el === Math.max(correct1, correct2, correct3)) {
        console.log('check');
        return idx + 1;
      }
    })
    .filter((el, idx) => el !== undefined);

  // console.log(result);
  return result;
}
