function solution(list) {
    return list.reduce((acc, n) => acc + n, 0) / list.length;
}