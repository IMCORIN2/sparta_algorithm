function solution(k,m,score) {
    let answer = 0;
    score.sort((a,b)=>b-a);
    // console.log("score=>", score)

    let newArr = score.slice(0,score.length-score.length%m);
    // console.log("newArr=>",newArr);
    
    const filteredArr = newArr.filter((el,idx)=>{
        if(idx%m===m-1){
            return el;
        }
    })
    // console.log("filteredArr=>",filteredArr);

    filteredArr.forEach((el)=>{
        answer += el*m;
    })

    // console.log("answer=>",answer)
    return answer;
};
