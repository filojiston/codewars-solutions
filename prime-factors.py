def prime_factors(n):
    factors = []
    divisor = 2
    while n > 1:
        while n % divisor == 0:
            factors.append(divisor)
            n /= divisor
        divisor += 1
    return factors


print(prime_factors(1), [])
print(prime_factors(3), [3])
print(prime_factors(8), [2, 2, 2])
print(prime_factors(9), [3, 3])
print(prime_factors(12), [2, 2, 3])
