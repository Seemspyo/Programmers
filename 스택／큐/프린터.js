function solution(priorities, location) {
    priorities = priorities.map(priority => ({ value: priority }));
    location = priorities[location];

    const queue = new Array();

    while (priorities.length) {
        const item = priorities.shift();

        if (priorities.find(({ value }) => item.value < value)) {
            priorities.push(item);
            continue;
        }

        queue.push(item);
    }

    return queue.indexOf(location) + 1 || void(0);
}