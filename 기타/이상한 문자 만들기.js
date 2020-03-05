// function solution(s) { 시간 복잡도 O(n2)
//     return s.split(' ').map(word => {
//         let result = '';

//         for (let i = 0; i < word.length; i++) result += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
        
//         return result;
//     }).join(' ');
// }

function solution(s) {
    let answer = '', wordIndex = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char !== ' ') {
            char = wordIndex % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
            wordIndex++;
        } else wordIndex = 0;
        
        answer += char;
    }
    
    return answer;
}