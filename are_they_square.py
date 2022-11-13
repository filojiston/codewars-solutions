def is_square(arr):
    return all([(x ** 0.5).is_integer() for x in arr]) if arr else None


print(is_square([1, 4, 9, 16, 25, 36]), True)
print(is_square([1, 2, 3, 4, 5, 6]), False)
print(is_square([]), None)
print(is_square([1, 4, 9, 16, 25]), True)
print(is_square([1, 2, 4, 15]), False)
