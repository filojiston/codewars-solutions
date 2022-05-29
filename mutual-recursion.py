def f(n):
    return 1 if n == 0 else n - m(f(n - 1))


def m(n):
    return 0 if n == 0 else n - f(m(n - 1))


print(f(0), 1)
print(f(5), 3)
print(f(10), 6)
print(m(0), 0)
print(m(5), 3)
print(m(10), 6)
