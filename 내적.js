function solution(a, b) {
    let total = 0;
    a.forEach((el,i)=> total += el*b[i])
    return total;
}