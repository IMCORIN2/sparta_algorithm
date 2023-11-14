function solution(s) {
    let sArr = s.split("");
    return sArr.length%2 === 1 ? sArr[Math.floor(sArr.length/2)] : sArr[sArr.length/2-1] + sArr[sArr.length/2];
}