function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    
    const navigatables = new Set();
    let total = 0;
    
    const build = ([ n1, n2, cost ]) => {
        navigatables.add(n1).add(n2);
        total += cost;
    }
    
    build(costs.shift());
    
    while (navigatables.size < n) {
        let index = costs.findIndex(([ n1, n2 ]) => {
            const c1 = navigatables.has(n1), c2 = navigatables.has(n2);
            
            return c1 && !c2 || !c1 && c2;
        });
        
        build(costs.splice(index, 1)[0]);
    }

    return total;
}