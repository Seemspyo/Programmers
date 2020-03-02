function solution(number, k) {
    const len = number.length;
    let
    result = '',
    max = 0,
    from = 0;

    for (let i = len - k; i > 0; i--) {
        let prevChar = '0';

        for (let j = from; j <= len - i; j++) {
            if (number[j] > prevChar) {
                max = j;
                prevChar = number[j];

                if (prevChar === '9') break;
            }
        }

        result += prevChar;
        from = max + 1;
    }

    return result;
}