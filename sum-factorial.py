def sum_factorial(lst):
    def factorial(n):
        if n == 0:
            return 1
        else:
            return n * factorial(n-1)
    return sum([factorial(x) for x in lst])


print(sum_factorial([4,6]), 744)
print(sum_factorial([5,4,1]), 145)
