function solution(n, m, section) {
  let wallArr = [];
  for (let i = 0; i < n; i++) {
    wallArr.push(i + 1);
  }

  let coloring = 0;

  for (let j = 0; j < n; j++) {
    // console.log("wallArr first element=>",wallArr[0])
    if (section.includes(wallArr[0])) {
      coloring++;
      for (k = 0; k < m; k++) {
        wallArr.shift();
      }
    } else {
      coloring += 0;
      wallArr.shift();
    }
    // console.log("coloring=>",coloring)
    // console.log("wallArr=>",wallArr);
  }

  return coloring;
}
