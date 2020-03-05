// function solution(x, N) { // 무려 3 루프
//     return Array(N).fill(1).map((n, i) => (n + i) * x);
// }

function solution(x, n) {
    const result = new Array();

    for (let i = 1; i <= n; i++) result.push(x * i);
    
    return result;
}