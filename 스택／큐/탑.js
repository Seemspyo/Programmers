function solution(heights) {
    const towers = heights.map( height => ({ height, receiver: void(0) }) );

    const sendSignal = sender => {
        const signalables = towers.slice(0, towers.indexOf(sender));

        let signalable;

        for (const tower of signalables.reverse()) {
            if (tower.height > sender.height) {
                signalable = tower;
                break;
            }
        }

        sender.receiver = towers.indexOf(signalable) + 1;
    }
    
    for (const tower of towers) sendSignal(tower);
    
    return towers.map(tower => tower.receiver);
}