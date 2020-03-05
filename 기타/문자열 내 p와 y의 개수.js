function solution(s){
    s = s.toLowerCase();
    
    const p = s.match(/p/g) || [], y = s.match(/y/g) || [];
    
    return p.length === y.length;
}