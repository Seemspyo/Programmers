function solution(message) {
    const lex = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), result = new Array();
    
    for (let at = 0; at < message.length; at++) {
        const rest = message.slice(at);

        for (let i = lex.length - 1; i >= 0; i--) {
            const frag = rest.slice(0, lex[i].length);

            if (lex[i] === frag) {
                result.push(i + 1);
                lex.push(rest.slice(0, lex[i].length + 1));
                at += frag.length - 1;
                break;
            }
        }
    }
    
    return result;
}