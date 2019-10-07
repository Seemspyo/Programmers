function solution(arrangement) {
    let fragments = 0;
    const forgeQueue = new Array();

    for (const char of arrangement.replace(/\(\)/g, 'l').split('')) {
        switch (char) {
            case '(':
                forgeQueue.push(void 0);
                break;
            case ')':
                fragments++;
                forgeQueue.pop();
                break;
            case 'l':
                fragments += forgeQueue.length;
                break;
        }
    }

    return fragments;
}