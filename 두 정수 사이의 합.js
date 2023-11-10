function solution(a, b) {
    let total = 0;
    const max = Math.max(a,b)
    const min = Math.min(a,b)

    for(let i=min;i<=max;i++){
        total += i
    }

    return total;
}