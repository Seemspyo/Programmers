function solution(routes) {
    routes = routes.sort((a, b) => a[0] - b[0]);

    let
    camera = 1,
    leavePoint = routes[0][1];

    for (const [i, route] of routes.entries()) {
        if (leavePoint > route[1]) leavePoint = route[1];

        const next = routes[i + 1];
        if (next && leavePoint < next[0]) {
            camera++;
            leavePoint = next[1]
        }
    }

    return camera;
}