function solution(n, losts, reserves) {
    const students = new Array();

    for (let id = 1; id <= n; id++) {
        let clothes = 1;
        if (losts.includes(id)) clothes--;
        if (reserves.includes(id)) clothes++;

        students.push(clothes);
    }

    students.forEach((clothes, id) => {
        if (!clothes) {
            let lenderId;

            for (const i of [id - 1, id + 1])
                if (students[i] > 1) {
                    lenderId = i;
                    break;
                }

            if (lenderId !== void(0)) {
                students[id] = 1;
                students[lenderId] = students[lenderId] - 1;
            }
        }
    });

    return students.filter(clothes => clothes > 0).length;
}