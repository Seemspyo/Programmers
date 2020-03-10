function solution(arr) {
    return arr.reduce((acc, n) => acc * n / gcf(acc, n), arr[0]);
}

function gcf(a, b) {
    const rest = a % b;

    return rest ? gcf(b, rest) : b;
}