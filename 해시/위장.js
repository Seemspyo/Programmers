function solution(clothes) {
    const cabinet = arrangeToCabinet(clothes);

    const stacks = new Array();

    for (const [key, drawer] of cabinet) stacks.push(drawer.length);

    let combinations = stacks[0] + 1;
    for (let stack of stacks.slice(1)) combinations *= stack + 1;

    return combinations - 1;
}

function arrangeToCabinet(clothes) {
    const cabinet = new Map();

    for (const [clothing, sort] of clothes) {
        const drawer = cabinet.get(sort);

        if (drawer) drawer.push(clothing);
        else cabinet.set(sort, [clothing]);
    }

    return cabinet;
}