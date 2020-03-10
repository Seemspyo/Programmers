function solution(s) {
    const table = new Array();
    
    for (const char of s) {
        if (table[table.length - 1] === char) table.pop();
        else table.push(char);
    }
    
    return table.length ? 0 : 1;
}