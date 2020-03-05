function solution(month, date) {
    const days = 'SUN,MON,TUE,WED,THU,FRI,SAT'.split(',');

    let dates = date + 4;
    for (let n = 1; n < month; n++) dates += getDates(n);

    return days[dates % days.length];
}

function getDates(month) {
    if (month === 2) return 29;
    if (month < 8) {
        if (month % 2 === 1) return 31;
        return 30;
    }
    if (month >= 8) {
        if (month % 2 === 1) return 30;
        return 31;
    }
}