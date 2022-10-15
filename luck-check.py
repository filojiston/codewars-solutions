def luck_check(string):
    string_arr = list(map(lambda x: int(x), list(string)))
    mid = len(string_arr) // 2
    left, right = string_arr[:mid], string_arr[mid:]
    if not len(string_arr) % 2 == 0:
        right = right[1:]

    return sum(left) == sum(right)


# compact solution using zip, i liked it
def luck_check(s):
    if not s.isnumeric(): raise ValueError
    return not sum(int(a) - int(b) for a, b in zip(s[:len(s)//2], s[::-1]))

print(luck_check('683179'))
print(luck_check('683000'))
