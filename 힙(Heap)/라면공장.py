import heapq
from collections import deque

def solution(stock, dates, supplies, k):
    n = 0
    queue = []

    dates = deque(dates)
    supplies = deque(supplies)

    while stock < k:
        while dates and dates[0] <= stock:
            dates.popleft()
            heapq.heappush(queue, -supplies.popleft())

        stock += -heapq.heappop(queue)
        n += 1

    return n