// function solution(s) {
//   const strNum = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//   const numElementes = s.split("").filter((el) => Number(el));
//   const strElementes = [];

//   strNum.forEach((el) => {
//     // s.includes(el) ? strElementes.push(s.indexOf(el)) : 0; 
//     s.includes(el) ? strElementes.push(strNum.indexOf(el) + 1) : 0;
//   });
//   console.log(numElementes);
//   console.log(strElementes);
// }
// solution("one4seveneight");


// function solution(s) {
//   const strNum = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//   const numElementes = s.split("").filter((el) => Number(el));
//   const strElementes = [];
//   const newArr = strNum.map((el) => s.indexOf(el));
 
//   let total = 0;
//   newArr.forEach((el)=>{
//     if(el !== -1){
//       total++;
//     }
//   })

//    //총 숫자의 개수
//    numElementes.length + total
// }
// solution("one4seveneight");

function solution(s) {
  let answer = "";
  const strNum = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for(let el of s){
    if(!isNaN(Number(el))) {
      answer += el;
    } else {
      const strEle = strNum.find((el)=>s.includes(el))
      answer += strEle[0];
    }
  }
}
solution("one4seveneight");