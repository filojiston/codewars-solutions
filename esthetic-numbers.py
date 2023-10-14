from numpy import base_repr


def esthetic(num):
    def is_esthetic(num_str):
        for i in range(len(num_str) - 1):
            if not abs(int(num_str[i]) - int(num_str[i + 1])) == 1:
                return False
        return True

    # clever usage of zip, i liked it
    def is_esthetic(num_str):
        return all(abs(int(a) - int(b)) == 1 for a, b in zip(num_str, num_str[1:]))

    result = []
    for i in range(2, 10 + 1):
        if is_esthetic(base_repr(num, i)):
            result.append(i)
    return result


print(esthetic(10), [2, 3, 8, 10], "Example #1")
print(esthetic(23), [3, 5, 7, 10], "Example #2")
print(esthetic(666), [8], "Example #3")
print(esthetic(13), [5, 6])
print(esthetic(1), [2, 3, 4, 5, 6, 7, 8, 9, 10])
print(esthetic(9), [4, 7, 9, 10])
print(esthetic(74), [])
print(esthetic(740), [4, 6, 9])
print(esthetic(928), [])
print(esthetic(259259), [9])
print(esthetic(883271), [])
print(esthetic(1080898), [7])
print(esthetic(1080899), [])
