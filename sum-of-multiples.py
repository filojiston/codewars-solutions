def sum_mul(n, m):
    if n <= 0 or m <= 0:
        return "INVALID"
    else:
        return sum([i for i in range(n, m, n)])


print(sum_mul(0, 0), "INVALID")
print(sum_mul(2, 9), 20)
print(sum_mul(4, -7), "INVALID")
