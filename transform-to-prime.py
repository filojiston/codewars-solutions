def minimum_number(numbers):
    limit = 100001
    primes = generate_primes_with_sieve(limit)
    sum_of_numbers = sum(numbers)
    if sum_of_numbers in primes:
        return 0

    primes.append(sum_of_numbers)
    primes.sort()
    return primes[primes.index(sum_of_numbers) + 1] - sum_of_numbers


def generate_primes_with_sieve(limit):
    primes = []
    sieve = [True] * limit
    sieve[0] = False
    sieve[1] = False
    for i in range(2, limit):
        if sieve[i]:
            primes.append(i)
            for j in range(i*i, limit, i):
                sieve[j] = False
    return primes

print(minimum_number([3, 1, 2]), 1)
print(minimum_number([5, 2]), 0)
print(minimum_number([1, 1, 1]), 0)
print(minimum_number([2, 12, 8, 4, 6]), 5)
print(minimum_number([50, 39, 49, 6, 17, 28]), 2)
