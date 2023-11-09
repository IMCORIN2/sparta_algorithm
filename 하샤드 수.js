function solution(x) {
    const totalNum = String(x).split("").reduce((acc,el)=> acc + Number(el), 0)
   
    return x%totalNum === 0 ? true : false ;
};