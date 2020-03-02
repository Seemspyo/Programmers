function solution(weights) {
    weights.sort((a, b) => a - b);

    let n = 0;

    for (let i = 0; i < weights.length; i++) {
        if (n + 1 < weights[i]) break;

        n += weights[i];
    }

    return ++n;
}