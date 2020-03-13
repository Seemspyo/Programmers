function solution(n, nodes) {
    const visited = Array(n).fill(false);
    let count = 0;
    
    const navigate = (node, index) => {
        visited[index] = true;
        
        node.forEach((connection, i) => {
            if (connection && !visited[i]) navigate(nodes[i], i);
        });
    }
    
    nodes.forEach((node, i) => {
        if (!visited[i]) {
            navigate(node, i);
            count++;
        }
    });
    
    return count;
}