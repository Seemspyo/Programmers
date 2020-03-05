function solution(s) {
    return s.split('').sort((a, b) => {
        const aBig = a === a.toUpperCase(), bBig = b === b.toUpperCase();

        if (aBig === bBig) return b.localeCompare(a);
        return !aBig && bBig ? -1 : +1;
    }).join('');
}