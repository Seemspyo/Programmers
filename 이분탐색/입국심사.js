function solution(n, times) {
    let
    left = 1,
    right = n * Math.max.call(void 0, ...times);
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        let passed = 0;
        for (const t of times) passed += Math.floor(mid / t);

        if (passed < n) left = mid + 1;
        else right = mid;
    }
    
    return left;
}