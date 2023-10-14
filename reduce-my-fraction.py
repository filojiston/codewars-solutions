import math


def reduce_fraction(fraction):
    numerator, denominator = fraction
    gcd = math.gcd(numerator, denominator)
    return (numerator // gcd, denominator // gcd)


# wow
from fractions import Fraction


def reduce_fraction(fraction):
    t = Fraction(*fraction)
    return (t.numerator, t.denominator)


print(reduce_fraction((60, 20)), (3, 1))
print(reduce_fraction((80, 120)), (2, 3))
print(reduce_fraction((4, 2)), (2, 1))
print(reduce_fraction((45, 120)), (3, 8))
print(reduce_fraction((1000, 1)), (1000, 1))
print(reduce_fraction((1, 1)), (1, 1))
