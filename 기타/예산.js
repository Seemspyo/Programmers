function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let
    left = 0,
    right = d.length;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        const total = d.slice(0, mid).reduce((acc, n) => acc + n, 0);
        
        if (total < budget) left = mid + 1;
        else if (budget < total) right = mid - 1;
        else return mid;
    }
    
    return right;
}