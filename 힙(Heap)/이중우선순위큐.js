function solution(operations) {
    const queue = new Array();

    for (const operation of operations) {
        let [ director, value ] = operation.split(' ');
        value = Number.parseInt(value);

        switch (director) {
            case 'I':
                queue.push(value);
                queue.sort((a, b) => a - b);
                break;
            case 'D':
                if (queue.length) queue.splice(Math.min(0, -value), 1);
                break;
        }
    }

    return queue.length ? [ queue[queue.length - 1], queue[0] ] : [ 0, 0 ]
}