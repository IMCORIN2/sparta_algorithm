function solution(arr) {
    let result = arr.reduce((acc,el)=>{
        return acc+el;
    },0)

    let answer = result/arr.length;
    return answer;
}