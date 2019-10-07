function solution(distance, limit, truckWeights) {
    const
    waitLine = truckWeights.map( weight => ({ traveled: 0, weight, travel() { this.traveled++; } }) ),
    bridge = new Array(),
    crossible = additional => {
        const total = bridge.length ? bridge.map(({ weight }) => weight).reduce((total, weight) => total + weight) : 0;
        
        return total + additional <= limit;
    },
    travelEach = (truck, index) => {
        truck.travel();
        if (truck.traveled > distance) bridge.splice(index, 1);
    }

    let time = 0;

    while (waitLine.length || bridge.length) {
        [ ...bridge ].forEach(travelEach);

        if (waitLine.length) {
            const truck = waitLine[0];

            if (crossible(truck.weight)) {
                truck.travel();
                bridge.push(truck);
                waitLine.splice(0, 1);
            }
        }

        time++;
    }

    return time;
}