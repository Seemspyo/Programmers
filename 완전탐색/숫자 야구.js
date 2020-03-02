function solution(baseball) {
    let table = getSearchTable();

    for (let [query, strike, ball] of baseball) {
        query = query.toString().split('');

        table = table.filter(item => {
            let s = 0, b = 0;

            for (let i = 0; i < 3; i++) {
                const qIndex = item.indexOf(query[i]);

                if (qIndex < 0) continue;
                else if (qIndex === i) s++;
                else b++;
            }

            return s === strike && b === ball;
        });
    }

    return table.length;
}

function getSearchTable() {
    const table = new Array();

    for (let i = 123; i <= 987; i++) {
        const set = new Set(i.toString().split(''));
        if (set.has('0')) continue;
        if (set.size === 3) table.push(Array.from(set));
    }

    return table;
}