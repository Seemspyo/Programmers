function solution(N) {
    const to = Math.floor(N / 2);
    let total = 0;
    
    for (let n = 1; n <= to; n++) if (N % n === 0) total += n;
    
    return total + N;
}