function solution(n) {
    var answer = 0;
    for(let i=1;i<n;i++){
        if(n===i**2){
            answer = (i+1)**2;
            break;
        } else {
            answer = -1;
        }
    }
    return answer;
};