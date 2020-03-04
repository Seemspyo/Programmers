function solution(n) {
    const conversion = new Map([ [ 1, '1' ], [ 2, '2' ], [ 0, '4' ] ]);

    let answer = '';
    
    while (n > 0) {
        const rest = n % 3;
        answer = conversion.get(rest).concat(answer);

        n = (n - rest) / 3;
        if (rest === 0) n--;
    }
    
    return answer;
}