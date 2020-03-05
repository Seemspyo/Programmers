function solution(strings, i) {
    return strings.sort((a, b) => {
        if (a[i] === b[i]) {
            if (a < b) return -1;
            if (b < a) return +1;
            return 0;
        }
        
        return a[i].charCodeAt() - b[i].charCodeAt();
    });
}