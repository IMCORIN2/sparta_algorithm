function solution(s, n) {
    const capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const sArr = s.split("");
    
    let result = "";
    sArr.forEach((el)=> {
        if(el === " "){
            result += " ";
        } else if(el === el.toLowerCase()) {
            result += smallLetters[smallLetters.indexOf(el)+n];
        } else if(el === el.toUpperCase()){
            result += capitalLetters[capitalLetters.indexOf(el)+n];
        }
    })
    console.log(result)
    return result;
}

solution("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1);
