function solution(numbers) {
    const combinations = [ ...numbers ]

    combinations.sort((a, b) => {
        ([a, b] = [String(a), String(b)]);

        const
        caseA = Number.parseInt(a.concat(b)),
        caseB = Number.parseInt(b.concat(a));

        switch (true) {
            case caseA < caseB:
                return +1;
            case caseB < caseA:
                return -1;
            default:
                return a.length - b.length;
        }
    });
    
    const result = combinations.join('');

    return result.charAt(0) !== '0' ? result : '0';
}