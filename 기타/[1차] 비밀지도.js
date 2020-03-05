function solution(N, arr1, arr2) {
    const
    map = [ ' ', '#' ],
    int = char => Number.parseInt(char),
    binary = n => {
        n = n.toString(2);

        return '0'.repeat(N - n.length) + n;
    }

    return arr1.map((n, index) => {
        const n1 = binary(n), n2 = binary(arr2[index]);
        let row = '';
        
        for (let i = 0; i < N; i++) row += map[ Math.min(1, int(n1[i]) + int(n2[i])) ];

        return row;
    });
}