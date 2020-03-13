function solution(w, h) { //공식 찾아내기 어려움
    return w * h - (w + h - getGCF(w, h));
}

function getGCF(a, b) {
    return a % b ? getGCF(b, a % b) : b;
}