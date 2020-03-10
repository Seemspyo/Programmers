function solution(s1, s2) {
    const
    validator = /(?![A-Z])./i,
    elementalize = s => {
        const arr = new Array();
        s = s.toLowerCase();

        for (let i = 0; i < s.length - 1; i++) arr.push(s.slice(i, i + 2));

        return arr.filter(el => !validator.test(el));
    }
    
    const el1 = elementalize(s1), el2 = elementalize(s2);
    let interset = 0;
    
    for (let i = 0; i < el1.length; i++) {
        const crossIndex = el2.indexOf(el1[i]);

        if (crossIndex >= 0) {
            interset++;
            delete el2[crossIndex];
        }
    }
    
    return Math.floor((el1.length || el2.length ? interset / (el1.length + el2.length - interset) : 1) * 65536);
}