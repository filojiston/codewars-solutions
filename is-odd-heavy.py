def is_odd_heavy(arr):
    odds = list(filter(lambda x: x % 2 == 1, arr))
    evens = list(filter(lambda x: x % 2 == 0, arr))

    return len(odds) > 0 and (len(evens) == 0 or all(map(lambda x: x > max(evens), odds)))

# this is clever too
# def is_odd_heavy(arr):
#     max_even = max(filter(lambda x: x % 2 == 0, arr), default=float('-inf'))
#     min_odd = min(filter(lambda x: x % 2 != 0, arr), default=float('-inf'))
#     return max_even < min_odd

cases = [
    ([0, 2, 19, 4, 4], True),
    ([1, -2, -1, 2], False),
    ([-3, 2, 1, 3, -1, -2], False),
    ([3, 4, -2, -3, -2], False),
    ([-1, 1, -2, 2, -2, -2, -4, 4], False),
    ([-1, -2, 21], True),
    ([0, 0, 0, 0], False),
    ([0, -1, 1], False),
    ([0, 2, 3], True),
    ([0], False),
    ([], False),
    ([1], True),
    ([0, 1, 2, 3, 4, 0, -2, -1, -4, -3], False),
    ([1, -1, 3, -1], True),
    ([1, -1, 2, -2, 3, -3, 0], False),
    ([3], True),
    ([2, 4, 6], False),
    ([-2, -4, -6, -8, -11], False),
]

for xs, expected in cases:
    print(is_odd_heavy(xs) == expected)
