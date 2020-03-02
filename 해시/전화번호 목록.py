def solution(book):
    i = 0

    for n in book:
        size = len(n)
        j = 0

        for k in book:
            if i != j and k.startswith(n):
                return False
            j += 1

        i += 1

    return True