function solution(left, right) {
    let arr = [];
    let result = 0;
    for(let i=left;i<=right;i++){
        arr.push(i);
    }
    arr.forEach((el)=>{
        let total = 0;
        for(let i=1;i<=el;i++){
            if(el%i===0){
                total++;
            }
        }
        total%2===0 ? result += el : result -= el;    
    })
    return result;
}