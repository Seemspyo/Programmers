def solution(prices):
    size = len(prices)
    answers = []

    for i in range(0, size):
        n = 0

        for j in range(i + 1, size):
            n += 1
            if prices[j] < prices[i]:
                break

        answers.append(n)

    return answers