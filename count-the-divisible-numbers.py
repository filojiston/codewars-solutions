# Let B = b * M and
#     A = a * M
# The count of numbers divisible by
# 'M' between A and B will be equal
# to b - a.

# Example:
# A = 25, B = 70, M = 10.
# Now, a = 2, b = 7.
# Count = 7 - 2 = 5.

# A = 30, B = 70, M = 10.
# Now, a = 3, b = 7.
# Count = 7 - 3 = 4.
# But, Count should be 5. Thus, we will
# add 1 explicitly.

# https://www.geeksforgeeks.org/count-numbers-divisible-m-given-range/
def divisible_count(x, y, k):
    return (y // k) - (x // k) + (x % k == 0)


print(divisible_count(6, 11, 2), 3)
