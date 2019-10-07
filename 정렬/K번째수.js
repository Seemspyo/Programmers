function solution(array, commands) {
    const answer = []
    
    for (let [start, end, at] of commands) {
        start--;
        at--;
        answer.push(array.slice(start, end).sort((a, b) => a - b)[at]);
    }

    return answer;
}