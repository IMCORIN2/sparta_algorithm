function solution(n, m) {
    let GCD = 1;
    let LCM = 1;
    for(let i = 2; i <= Math.min(n, m); i++){
        if(n % i === 0 && m % i === 0){
            GCD = i;
        }
    }
    
    while(true){
        if(LCM % n === 0 && LCM % m === 0){
            break;
        }
        LCM++;
    }
    return [GCD,LCM];
}
solution(3,12)