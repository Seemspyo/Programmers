function solution(N, stages) {
    const reached = Array(N).fill(0), failed = Array(N).fill(0);
    
    for (const stage of stages) {
        const n = Math.min(stage, N);

        for (let i = 0; i < n; i++) reached[i]++;
        if (stage <= N) failed[n - 1]++;
    }
    
    return reached.map((n, i) => [ i + 1, n && (failed[i] / n) || 0 ])
                  .sort((a, b) => b[1] - a[1] || a[0] - b[0])
                  .map(map => map[0]);
}