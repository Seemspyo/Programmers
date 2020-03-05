function solution(list) {
    let prev = void 0;
    
    return list.filter(n => {
        if (prev === n) return false;
        
        prev = n;
        return true;
    });
}