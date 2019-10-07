function solution(numbers) {
    let combinations = combinate(numbers.split('')).map( el => Number.parseInt(el.join('')) );

    combinations = combinations.filter( (el, index) => isPrime( el ) && index === combinations.indexOf(el) );

    return combinations.length;
}

function combinate(inputs) {
    if (inputs.length === 1) return inputs;
    const cases = new Array();

    inputs.forEach((input, index) => {
        const clone = [ ...inputs ]
        clone.splice(index, 1);

        for (const sub of combinate(clone).concat(void 0)) cases.push([input].concat(sub));
    });

    return cases;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for(let n = 2; n <= Math.sqrt(num); n++) if(num % n === 0) return false;

    return true;
}