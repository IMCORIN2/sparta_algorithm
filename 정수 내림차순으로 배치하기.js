function solution(n) {
    let answer = 0;
    let strArr = String(n).split('');
    result = strArr.sort(function(a,b){
        return b-a;
    });
    answer = result.reduce((acc,el)=>{
        return acc + el;
    })
    answer = Number(answer);
    return answer;
}