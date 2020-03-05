function solution(N) {
    return N.toString().split('').reduce((acc, n) => acc + Number.parseInt(n), 0);
}