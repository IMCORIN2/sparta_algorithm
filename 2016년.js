function solution(a,b) {
    let day = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let newDate = new Date(2016,a-1,b);
    const newDateDay = newDate.getDay()
    
    return day[newDateDay];
};