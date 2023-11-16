function solution(n) {
    let result = "";
    n.toString(3).split("").reverse().forEach((el)=> result += el);
    const answer = parseInt(result,3);

    return answer
}
console.log(solution(45))