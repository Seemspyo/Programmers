function solution(x) {
    const sum = Array.from(x.toString()).reduce((acc, n) => acc + Number.parseInt(n), 0);

    return !(x % sum);
}