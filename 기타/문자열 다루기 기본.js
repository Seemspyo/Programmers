function solution(s) {
    return [4, 6].includes(s.length) && s.split('').every(char => !Number.isNaN(Number.parseInt(char)));
}