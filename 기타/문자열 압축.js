function solution(s) {
    const half = Math.floor(s.length / 2);
    
    let min = s.length;
    
    for (let n = 1; n <= half; n++) {
        let len = s.length, compressed = 0, prev = '';

        for (let i = 0; i <= s.length; i += n) {
            const current = s.substr(i, n);

            if (prev === current) compressed++;
            else {
                if (compressed) {
                    const countLen = (compressed + 1).toString().length;

                    len += countLen - (n * compressed);
                    compressed = 0;
                }

                prev = current;
            }
        }
        
        min = Math.min(min, len);
    }
    
    return min;
}