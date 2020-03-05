// function solution(n) { // with 형변환
//     const result = String(n).split('').sort((a, b) => Number.parseInt(b) - Number.parseInt(a)).join('');

//     return Number.parseInt(result);
// }

function solution(n) {
    const table = new Array();

    do {
        table.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);
    
    table.sort((a, b) => a - b);
    
    let result = 0;
    
    while (table.length) result = (result * 10) + table.pop();
    
    return result;
}