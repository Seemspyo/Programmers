class MathHater {
    
    constructor(pattern, id) {
        this.pattern = pattern.split('').map(el => Number.parseInt(el));
        this.score = void(0);
        this.id = id;
    }

    test(answers) {
        this.score = 0;

        for (const [index, answer] of answers.entries()) {
            if (this._getAnswerByIndex(index) === answer) this.score++;
        }
    }

    _getAnswerByIndex(index) {
        return this.pattern[index % this.pattern.length];
    }

}

function solution(answers) {
    const candidates = [
        new MathHater('12345', 1),
        new MathHater('21232425', 2),
        new MathHater('3311224455', 3)
    ]

    for (const candidate of candidates) candidate.test(answers);

    const rankers = new Array();

    for (const candidate of candidates.sort((a, b) => b.score - a.score)) {
        if (rankers.length && rankers[0].score > candidate.score) break;

        rankers.push(candidate);
    }

    return rankers.map(ranker => ranker.id);
}