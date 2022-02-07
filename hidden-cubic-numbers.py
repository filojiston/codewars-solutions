import re


def is_sum_of_cubes(s):
    nums = re.findall(r"\d{1,3}", s)
    cubics = list(filter(is_cubic, nums))
    sum_of_cubics = sum(map(lambda x: int(x), cubics))
    if sum_of_cubics == 0 and len(cubics) == 0:
        return "Unlucky"

    return f"{' '.join(cubics)} {sum_of_cubics} Lucky"


def is_cubic(s):
    chars = list(s)
    my_sum = 0

    for c in chars:
        my_sum += int(c) ** 3

    return my_sum == int(s)


# this is basically what i've done, just in 2 lines. congrats
# PATTERN = re.compile(r'(\d{1,3})')

# def is_sum_of_cubes(s):
#     found = list(filter(lambda nStr: int(nStr) == sum(
#         int(d)**3 for d in nStr), PATTERN.findall(s)))
#     return "Unlucky" if not found else "{} {} {}".format(' '.join(found), sum(map(int, found)), 'Lucky')


print(is_sum_of_cubes("0 9026315 -827&()"))
