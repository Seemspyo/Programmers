function solution(budgets, M) {
    budgets.sort((a, b) => a - b);

    let
    mid = void 0,
    left = 0,
    right = budgets[budgets.length - 1];

    const calc = n => {
        let result = 0;

        for (const budget of budgets) {
            result += Math.min(n, budget);

            if (result > M) return -1;
        }

        return result;
    }

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        const c1 = calc(mid);
        if (c1 < 0) {
            right = mid;
            continue;
        }

        const c2 = calc(mid + 1);

        if (c1 < c2) left = mid + 1;
        else if (0 <= c2 && c2 < c1) right = mid;
        else break;
    }

    return mid;
}