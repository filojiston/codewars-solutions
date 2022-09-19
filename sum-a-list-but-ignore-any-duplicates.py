from collections import Counter


def sum_no_duplicates(l):
    counts = Counter(l)
    return sum([x for x in l if counts[x] == 1])
