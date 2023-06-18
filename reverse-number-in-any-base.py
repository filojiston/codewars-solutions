def reverse_number(number, base):
    if base == 1:
        return number

    digits = []
    while number > 0:
        digits.append(number % base)
        number //= base

    reversed_digits = digits[::-1]

    result = 0
    multiplier = 1
    for digit in reversed_digits:
        result += digit * multiplier
        multiplier *= base

    return result


reversed_number = reverse_number(5, 1)
print(reversed_number)
