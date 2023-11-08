function solution(n){
    var answer = 0;
    let str = String(n);
    for(let el of str){
        el = Number(el);
        answer += el;
    }

    return answer;
}