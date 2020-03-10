function solution(ids) {
    return Math.min(new Set(ids).size, ids.length / 2);
}