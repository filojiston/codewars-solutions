from functools import lru_cache

@lru_cache(maxsize=1000)
def fibonacci(n):
    if n in [0, 1]:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(70), 190392490709135)
print(fibonacci(60), 1548008755920)
print(fibonacci(50), 12586269025)