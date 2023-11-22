function solution(k,score) {
    let arr = [];
    let top = [];
    let answer = [];
    score.forEach((el)=>{
        arr.push(el);
        arr.sort((a,b)=> b -a);
        top = arr.slice(0,k);
        answer.push(Math.min(...top));
    })
    return answer;
};