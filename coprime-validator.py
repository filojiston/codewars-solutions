def are_coprime(n, m):
    while m != 0:
        n, m = m, n % m
    return n == 1

print(are_coprime(20, 27), True, 'The numbers were 20 and 27')
print(are_coprime(12, 39), False, 'The numbers were 12 and 39')
