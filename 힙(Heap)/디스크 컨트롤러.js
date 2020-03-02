function solution(tasks) {
    const length = tasks.length;

    tasks.sort(( [ ar, ad ], [ br, bd ] ) => {
        const result = ar - br;

        if (result) return result;
        else return ad - bd;
    });

    let
    total = 0,
    duration = 0;

    while (tasks.length) {
        const [ r, d ] = tasks.shift();

        duration += Math.max(0, r - duration) + d;
        total += duration - r;

        tasks.sort(( [ ar, ad ], [ br, bd ] ) => {
            const
            ap = ar <= duration,
            bp = br <= duration;
            
            if (ap && bp) return ad - bd;
            if (ap) return -1;
            
            return 0;
        });
    }

    return Math.floor(total / length);
}