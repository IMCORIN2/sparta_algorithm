function solution(s) {
    let answer = "";
    s.split(" ").forEach((el,i)=>{
        el.split("").forEach((el,j)=>{
            j%2===0 ? answer += el.toUpperCase() : answer += el;
        });
        i !== s.split(" ").length -1 ? answer += " " : 0;
    });
    console.log(answer)
    return answer;
}
solution("  try             h e l l o world");

console.log("  try  hello world".split(" "))
console.log("".split(""))