function solution(n) {
    let total = "";
    for(let i=1;i<=n;i++){
        i%2 === 1 ? total += "수" : total += "박"
    }
    return total;
}