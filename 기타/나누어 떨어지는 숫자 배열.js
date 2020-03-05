function solution(list, scala) {
    const answer = list.filter(n => n % scala === 0).sort((a, b) => a - b);
    if (!answer.length) answer.push(-1);

    return answer;
}