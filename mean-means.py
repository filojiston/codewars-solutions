from functools import reduce


def geo_mean(nums, arith_mean):
    missing = (arith_mean * (len(nums) + 1)) - sum(nums)
    nums.append(missing)

    return (reduce(lambda x, y: x * y, nums)) ** (1.0 / len(nums))


print(geo_mean([2], 10), 6)
print(geo_mean([1, 2], 3), 2.2894284851066637)
print(geo_mean([4, 6, 7, 2], 5), 4.580344097847165)
