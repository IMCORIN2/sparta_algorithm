// function solution(n) {
//     var answer = [];
//      let str = String(n);
//     for(let i =0; i < str.length; i++){
//         answer.unshift(Number(str[i]));
//     }
//     return answer;
// }

function solution(n){
    const strArr = String(n).split("").sort((a,b)=>-b-a)
    const numArr =strArr.map((el)=>Number(el))
    return numArr
}