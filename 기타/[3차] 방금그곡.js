function solution(melody, infos) {
    const
    datetime = hm => new Date().setHours(...hm.split(':').concat([0, 0])),
    convert = m => {
        let result = '';
        
        for (let i = 0; i < m.length; i++) result += m[i + 1] === '#' ? m[i++].toLowerCase() : m[i];
        
        return result;
    }
    
    const hit = new Array();
    
    melody = convert(melody);

    for (const info of infos) {
        let [ start, end, title, m ] = info.split(',');
        const playtime = (datetime(end) - datetime(start)) / 60000;
        
        m = convert(m);
        
        const result = m.repeat(Math.floor(playtime / m.length)) + m.slice(0, playtime % m.length);

        if (result.includes(melody) && !hit[playtime]) hit[playtime] = title;
    }
    
    return hit.pop() || "(None)";
}