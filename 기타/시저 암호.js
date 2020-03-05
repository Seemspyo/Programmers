function solution(s, n) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        
        if (charCode === 32) {
            answer += s[i];
            continue;
        }

        const startCode = s[i] === s[i].toUpperCase() ? 65 : 97;
        
        answer += String.fromCharCode(startCode + (charCode - startCode + n) % 26);
    }

    return answer;
}