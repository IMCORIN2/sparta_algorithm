function solution(lottos, win_nums) {
    let correctCount = 0;
    let countZero = 0;
    lottos.forEach((el)=>{
        win_nums.includes(el) ? correctCount++ : 0;
        el===0 ? countZero++ : 0;
    });

    const supposeHighScore = correctCount + countZero;
    const supposeLowScore = correctCount;

    const answer = [7-supposeHighScore, 7-supposeLowScore];
    answer.forEach((el,idx)=>{
        el === 7 ? answer[idx] = 6 : 0;
    });
    return answer;
}