def score_throws(radii):
    less_than_five_count = 0
    total_points = 0
    for score in radii:
        if 5 <= score <= 10:
            total_points += 5
        elif score < 5:
            total_points += 10
            less_than_five_count += 1

    if less_than_five_count == len(radii) and len(radii) > 0:
        total_points += 100
    return total_points


print(score_throws([1, 5, 11]), 15)
print(score_throws([15, 20, 30, 31, 32, 44, 100]),  0)
print(score_throws([1, 2, 3, 4]), 140)
print(score_throws([]), 0, 'Empty list')
print(score_throws([1, 2, 3, 4, 5, 6, 7, 8, 9]), 65)
print(score_throws([0, 5, 10, 10.5, 4.5]),  30)
print(score_throws([1]), 110)
print(score_throws([21, 10, 10]), 10)
print(score_throws([5, 5, 5, 5]), 20)
print(score_throws([4.9, 5.1]),  15)
