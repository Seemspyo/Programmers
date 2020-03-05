function solution(n) {
    const sqrt = Math.sqrt(n);
    
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}