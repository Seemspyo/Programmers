function solution(N) {
    const count = binary => {
        const match = binary.match(/1/g);
        
        return match && match.length || 0;
    }

    const prev = count(N.toString(2));
    let n = N + 1;

    while (prev !== count(n.toString(2))) n++;
    
    return n;
}