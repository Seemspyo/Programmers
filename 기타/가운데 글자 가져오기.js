function solution(s) {
    const half = s.length / 2;

    switch (s.length % 2) {
        case 0: return s.slice(half - 1, half + 1);
        case 1: return s[Math.floor(half)];
    }
}