function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    while (completion.length) {
        var person = participant.pop();
        
        if (person !== completion.pop()) return person;
    }

    return participant.pop();
}