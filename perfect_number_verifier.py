def is_perfect(n):
    divisors = []
    limit = n ** 0.5

    for i in range(1, int(limit) + 1):
        if n % i == 0:
            divisors.append(i)
            if i != limit:
                divisors.append(n // i)

    print(divisors)
    return sum(divisors) - n == n


#  :D
def is_perfect(n):
    return n in [6, 28, 496, 8128, 33550336, 8589869056, 137438691328]


print(is_perfect(1) == False)
print(is_perfect(2) == False)
print(is_perfect(6) == True)
print(is_perfect(28) == True)
print(is_perfect(120) == False)
print(is_perfect(496) == True)
print(is_perfect(1234) == False)
print(is_perfect(2016) == False)
print(is_perfect(8128) == True)
