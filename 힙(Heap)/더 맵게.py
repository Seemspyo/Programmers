import heapq

def solution(scoville, K):
    heapq.heapify(scoville)

    def hot():
        return scoville[0] >= K

    def pop():
        return heapq.heappop(scoville)

    n = 0

    while not hot():
        if len(scoville) < 2:
            return -1

        heapq.heappush(scoville, pop() + pop() * 2)
        n += 1

    return n