const MIN = 3;

function solution(brown, red) {
    const
    total = brown + red,
    max = total - MIN;

    for (let h = MIN; h <= max; h++) {
        for (let w = MIN; w <= max; w++) {
            if (w * h === total) {
                const redCount = (w - 2) * (h - 2);

                if (brown === total - redCount) return [ w, h ]
            }
        }
    }
}