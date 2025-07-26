def levenshtein(a, b):
    if len(a) > len(b):
        a, b = b, a
    if len(b) == 0:
        return len(a)

    previous_row = range(len(b) + 1)
    for i, c1 in enumerate(a):
        current_row = [i + 1]
        for j, c2 in enumerate(b):
            insertions = previous_row[j + 1] + 1
            deletions = current_row[j] + 1
            substitutions = previous_row[j] + (c1 != c2)
            current_row.append(min(insertions, deletions, substitutions))
        previous_row = current_row
    return previous_row[-1]


print(levenshtein("kitten", "sitting"), 3)
print(levenshtein("book", "back"), 2)
print(levenshtein("book", "book"), 0)
print(levenshtein("qlzcfayxiz", "vezkvgejzb"), 9)
print(levenshtein("nayvyedosf", "sjxen"), 9)
print(levenshtein("sjxen", "sjxen"), 0)
print(levenshtein("peter", "peter"), 0)
print(levenshtein("bookie", "book"), 2)
