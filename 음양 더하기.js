function solution(absolutes, signs) {
    let total = 0;
    for(let i=0;i<absolutes.length;i++){
    if(signs[i]===false){
        signs[i] = -1;
    }
    total += absolutes[i] * signs[i]
}
    answer = total;
    return answer;
}