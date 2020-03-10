function solution(record) {
    const nickMap = new Map(), result = new Array();

    for (const message of record) {
        const [ action, id, nickname ] = message.split(' ');
        if (nickname) nickMap.set(id, nickname);
        
        switch (action) {
            case 'Enter':
                result.push({ id, text: '{ id }님이 들어왔습니다.' });
                break;
            case 'Leave':
                result.push({ id, text: '{ id }님이 나갔습니다.' });
                break;
        }
    }
    
    return result.map(message => message.text.replace('{ id }', nickMap.get(message.id)));
}