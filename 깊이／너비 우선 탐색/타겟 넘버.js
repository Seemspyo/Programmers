function solution(numbers, target) {
    const toBinary = n => {
        n = n.toString(2);
        
        return '0'.repeat(numbers.length - n.length).concat(n);
    }
    
    let count = 0;
    
    for (const n of Array(Math.pow(2, numbers.length)).keys()) {
        const
        operator = toBinary(n),
        result = numbers.reduce((acc, n, i) => acc + n * (operator[i] === '0' ? -1 : +1), 0);

        if (result === target) count++;
    }
    
    return count;
}