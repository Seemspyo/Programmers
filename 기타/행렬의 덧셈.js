function solution(arr1, arr2) {
    return arr1.map((row, i) => {
        return row.map((col, j) => col + arr2[i][j]);
    });
}