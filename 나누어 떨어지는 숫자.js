function solution(arr, divisor) {
    let newArr = [];;
    arr.forEach((el)=>{
        if(el%divisor===0){
            newArr.push(el);
            newArr.sort((a,b)=> a-b);
        }
    })
    return newArr.length ? newArr : [-1]
}