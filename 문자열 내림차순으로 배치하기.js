function solution(s) {
    return s.split("").sort((a,b)=> a>b ? -1 : 1).reduce((prev,current)=>prev + current)
}