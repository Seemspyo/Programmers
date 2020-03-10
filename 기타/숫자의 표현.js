function solution(N) {
    let cases = 1;
    
    for (let n = Math.ceil(N / 2); n > 0; n--) {
        let tmp = n;

        for (let i = n - 1; i > 0; i--) {
            tmp += i;
            
            if (tmp >= N) break;
        }
        
        if (tmp === N) cases++;
    }
    
    return cases;
}