function solution(arr1, arr2) {
    const answer = arr1.map((el,i)=> el.map((e,j)=> e + arr2[i][j]))
    return answer;
}
solution([[1,2],[2,3]],[[3,4],[5,6]])