def sum_square_even_root_odd(nums):
    return round(sum([i**2 if i % 2 == 0 else i**0.5 for i in nums]), 2)


print(sum_square_even_root_odd([4, 5, 7, 8, 1, 2, 3, 0]), 91.61)
print(sum_square_even_root_odd([1, 14, 9, 8, 17, 21]), 272.71)
