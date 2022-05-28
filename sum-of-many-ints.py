def f(n, m):
    division = n // m
    modulo = n % m
    return sum_to_n(m) * division + sum_to_n(modulo + 1)


def sum_to_n(n):
    return n * (n - 1) // 2


def test():
    assert f(10, 5) == 20
    assert f(20, 20) == 190
    assert f(15, 10) == 60
