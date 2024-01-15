def smaller(arr):
    return list(map(lambda t: sum(map(lambda y: y < t[1], arr[t[0]:])), enumerate(arr)))

print(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0])
print(smaller([1, 2, 3]), [0, 0, 0])
print(smaller([1, 2, 0]), [1, 1, 0])
print(smaller([1, 2, 1]), [0, 1, 0])
print(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0])
print(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0])
