function solution(n, words) {
    const spoken = new Set([ words[0] ]);
    let prev = words[0].charAt(words[0].length - 1), i;
    
    for (i = 1; i < words.length; i++) {
        if (!spoken.has(words[i]) && words[i].charAt(0) === prev) {
            spoken.add(words[i]);
            prev = words[i].charAt(words[i].length - 1);
        } else return [ i % n + 1, Math.ceil((i + 1) / n) ]
    }
    
    return [ 0, 0 ]
}