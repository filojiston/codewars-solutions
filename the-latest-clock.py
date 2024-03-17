def latest_clock(a, b, c, d):
    nums = [a, b, c, d]

    fd = first_digit(nums)
    nums.remove(fd)

    sd = second_digit(nums, fd)
    nums.remove(sd)

    td = third_digit(nums)
    if td is None:
        nums.append(fd)
        nums.append(sd)
        fd = first_digit(nums, error_flag=True)
        nums.remove(fd)
        sd = second_digit(nums, fd)
        nums.remove(sd)
        td = third_digit(nums)

    nums.remove(td)

    return f"{fd}{sd}:{td}{nums[0]}"

def first_digit(nums, error_flag=False):
    if error_flag:
        return sorted(filter(lambda x: x <= 1, nums), reverse=True)[0]
    return sorted(filter(lambda x: x <= 2, nums), reverse=True)[0]


def second_digit(nums, first_digit):
    if first_digit == 2:
        return sorted(filter(lambda x: x <= 3, nums), reverse=True)[0]
    else:
        return sorted(nums, reverse=True)[0]

def third_digit(nums):
    try:
        return sorted(filter(lambda x: x <= 5, nums), reverse=True)[0]
    except IndexError:
        return None

# there are more solutions like this:from itertools import *
# they are very concise, but little hard to understand
from itertools import *
late_clock = lambda *a: max("%s%s:%s%s" % c for c in permutations(a) if c[:2] < (2, 4) and c[2] < 6)

print(latest_clock(1, 9, 8, 3))
print(latest_clock(9, 1, 2, 5))
print(latest_clock(1, 2, 8, 9))


