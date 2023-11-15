function solution(s) {
    const answer = s.split("").every((el)=> !isNaN(Number(el)));
    const meetLength = s.length === 4 || s.length === 6;
    return answer && meetLength ? true : false;
};
console.log(solution("a234"))
console.log(solution("1234"))

