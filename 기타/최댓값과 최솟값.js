function solution(s) {
    const table = s.split(' ').sort((a, b) => Number.parseInt(a) - Number.parseInt(b));
    
    return `${ table[0] } ${ table.pop() }`;
}