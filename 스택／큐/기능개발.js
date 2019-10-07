class Progress {

    constructor(progresses, speeds) {
        this.progresses = () => progresses.map( (value, i) => ({ value, speed: speeds[i] }) );
    }

    get countPerRelease() {
        let progresses = this.progresses();
        const releaseQueue = new Array();

        while (progresses.length) {
            this.spendDay(progresses);

            const lastReleasable = this.lastReleasableIndex(progresses);

            if (typeof lastReleasable === 'number') {
                releaseQueue.push(progresses.slice(0, lastReleasable + 1).length);
                progresses = progresses.slice(lastReleasable + 1, progresses.length);
            }
        }

        return releaseQueue;
    }

    spendDay(progresses) {
        for (let progress of progresses) progress.value = Math.min(100, progress.value + progress.speed);

        return progresses;
    }

    lastReleasableIndex(progresses) {
        let availableLast;

        for (let progress of progresses) {
            if (progress.value < 100) break;

            availableLast = progresses.indexOf(progress);
        }

        return availableLast;
    }

}

function solution(progresses, speeds) {
    return new Progress(progresses, speeds).countPerRelease;
}