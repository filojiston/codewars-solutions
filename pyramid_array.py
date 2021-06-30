def pyramid(n):
    return [[1 for i in range(j)] for j in range(1, n + 1)]


print(pyramid(0), [])
print(pyramid(1), [[1]])
print(pyramid(2), [[1], [1, 1]])
print(pyramid(3), [[1], [1, 1], [1, 1, 1]])
