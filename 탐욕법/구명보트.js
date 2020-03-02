function solution(people, limit) {
    let boat = 0;

    people.sort((a, b) => a - b);

    while (people.length) {
        const avail = limit - people.pop();

        if (avail >= 40) {
            for (let i = 0; i < people.length; i++) {
                if (people[i] <= avail) {
                    people.splice(i, 1);
                    break;
                }
            }
        }

        boat++;
    }

    return boat;
}