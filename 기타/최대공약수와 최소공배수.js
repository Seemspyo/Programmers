function solution(n, m) {
    const gcf = getGCF(n, m);

    return [ gcf, n * m / gcf ]
}

function getGCF(a, b) {
    return a % b ? getGCF(b, a % b) : b;
}