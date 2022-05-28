def fibonacci(n):
    result = []
    a, b = 0, 1
    while len(result) < n:
        result.append(a)
        a, b = b, a + b
    return result


def test():
    assert fibonacci(4) == [0, 1, 1, 2]
    assert fibonacci(1) == [0]
    assert fibonacci(0) == []
    assert fibonacci(-1) == []
    assert fibonacci(-14) == []
    assert fibonacci(10) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
