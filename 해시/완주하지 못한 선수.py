def solution(participant, completion):
    participant.sort()
    completion.sort()

    while completion:
        person = participant.pop()

        if person != completion.pop():
            return person

    return participant.pop()