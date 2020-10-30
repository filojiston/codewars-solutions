def power_of_two(x):
  result = 0
  counter = 0
  while result < x:
    result = 2 ** counter
    counter += 1

  return result == x if not x == 0 else False


# some good solutions

# def power_of_two(num):
#     return bin(num).count('1') == 1

# same binary logic as above
# def power_of_two(x):
#     return x != 0 and ((x & (x - 1)) == 0)

print(power_of_two(0), False)
print(power_of_two(1), True)
print(power_of_two(2), True)
print(power_of_two(5), False)
print(power_of_two(6), False)
print(power_of_two(4096), True)
print(power_of_two(536870912), True)
