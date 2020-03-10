function solution(a, b) {
    const col = b[0].length;

    return a.map(aRow => {
        const result = new Array();

        for (let i = 0; i < col; i++) {
            result[i] = 0;

            for (let j = 0; j < b.length; j++) result[i] += aRow[j] * b[j][i];
        }
        
        return result;
    });
}