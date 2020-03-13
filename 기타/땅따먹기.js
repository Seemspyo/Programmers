function solution(land) {
    for (let y = 1; y < land.length; y++) {
        const
        row = land[y],
        [ min, max ] = land[y - 1].map((n, i) => ({ n, i })).sort((a, b) => a.n - b.n).slice(2);
        
        for (let i = 0; i < row.length; i++) row[i] += i === max.i ? min.n : max.n;
    }
    
    return Math.max(...land.pop());
}