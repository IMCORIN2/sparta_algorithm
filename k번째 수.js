function solution(arr,commands) {
    let answer = [];
    commands.forEach((el)=>{
        let newArr = arr.slice(el[0]-1,el[1]).sort((a,b)=>a-b);
        answer.push(newArr[el[2]-1])
    })

    return answer;
}