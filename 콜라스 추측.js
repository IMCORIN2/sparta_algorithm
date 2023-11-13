function solution(num) {
    let total = 0;
    function recursive(num) {
        if(num%2===0){
            total++;
            num = num/2;
            return recursive(num);
        } else if(num===1){
            return total;
        } else if(num%2===1){
            total++
            num = num * 3 + 1;
            return recursive(num);
        } 
    }
    recursive(num);
    return total > 500 ? -1 : total;
}