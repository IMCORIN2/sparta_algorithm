function solution(t,p) {
    const tArr = t.split("");
    let count = 0;
    for(let i=0; i<t.length - p.length +1;i++){
        const tValue = tArr.slice(i, i+p.length).reduce((prev,current)=> {return prev + current},"")
        tValue <= p ? count++ : 0;
    }
    return count;
}
solution("3141592","271")


