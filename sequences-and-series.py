def get_score(n):
    return sum([(x + 1) * 50 for x in range(n)])


print(get_score(1) == 50)
print(get_score(2) == 150)
print(get_score(3) == 300)
print(get_score(4) == 500)
print(get_score(5) == 750)
