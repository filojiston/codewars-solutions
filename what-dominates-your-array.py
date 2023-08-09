from collections import Counter


def dominator(arr):
    counts = Counter(arr)
    try:
        return (
            max(counts, key=counts.get)
            if counts.most_common(1)[0][1] > len(arr) / 2
            else -1
        )
    except IndexError:
        return -1


print(dominator([3, 4, 3, 2, 3, 1, 3, 3]), 3)
print(dominator([1, 2, 3, 4, 5]), -1)
print(dominator([1, 1, 1, 2, 2, 2]), -1)
print(dominator([1, 1, 1, 2, 2, 2, 2]), 2)
print(dominator([]), -1)
