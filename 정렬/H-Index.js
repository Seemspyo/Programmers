function solution(citations) {
    citations = [ ...citations ].sort((a, b) => b - a);

    for (let [index, citation] of citations.entries()) if (citation <= index) return index;

    return citations.length;
}