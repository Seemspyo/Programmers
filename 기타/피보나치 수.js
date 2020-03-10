function solution(n) {
    let a = 0, b = 1, c = 0;
    
    for (let i = 2; i <= n; i++) {
        c = (a + b) % 1234567;
        a = b % 1234567;
        b = c;
    }
    
    return c;
}