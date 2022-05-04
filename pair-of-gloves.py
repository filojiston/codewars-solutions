from collections import Counter


def number_of_pairs(gloves):
    counts = Counter(gloves)
    return sum(val // 2 for val in counts.values())


print(number_of_pairs(["red", "red"]), 1)
print(number_of_pairs(["red", "green", "blue"]), 0)
print(number_of_pairs(
    ["gray", "black", "purple", "purple", "gray", "black"]), 3)
print(number_of_pairs([]), 0)
print(number_of_pairs(
    ["red", "green", "blue", "blue", "red", "green", "red", "red", "red"]), 4)
