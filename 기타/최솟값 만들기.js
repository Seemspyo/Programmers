function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    return A.reduce((acc, n) => acc + n * B.pop(), 0);
}