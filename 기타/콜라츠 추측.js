function solution(n) {
    let repeat = 0;

    while (repeat < 500) {
        if (n === 1) return repeat;
        repeat++;

        n = n % 2 ? n * 3 + 1 : n / 2;
    }
    
    return -1;
}