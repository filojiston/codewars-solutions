def max_diff(lst):
    if len(lst) == 0:
        return 0
    maxi, mini = max(lst), min(lst)
    return maxi - mini


print(max_diff([0, 1, 2, 3, 4, 5, 6]), 6)
print(max_diff([-0, 1, 2, -3, 4, 5, -6]), 11)
print(max_diff([0, 1, 2, 3, 4, 5, 16]), 16)
print(max_diff([16]), 0)
print(max_diff([]), 0)
