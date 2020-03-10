function solution(size, cities) {
    const cache = new Array();

    return cities.reduce((duration, city) => {
        city = city.toLowerCase();

        const cacheIndex = cache.indexOf(city);
        
        if (cacheIndex >= 0) {
            duration += 1;
            cache.splice(cacheIndex, 1);
        } else {
            if (cache.length >= size) cache.shift();

            duration += 5;
        }

        if (cache.length + 1 <= size) cache.push(city);
        
        return duration;
    }, 0);
}