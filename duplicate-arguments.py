from collections import Counter


def solution(*args):
    return any(x != 1 for x in Counter(args).values())

# clever solution, i liked it
def solution(*args):
    return len(args) != len(set(args))


def test():
    assert solution(1, 2, 3, 1, 2) == True
    assert solution(1, 1) == True
    assert solution(1, 0) == False
    assert solution(1, 0, 2, 3, 4) == False
    assert solution() == False
