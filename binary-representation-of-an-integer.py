def show_bits(n):
    bits = list('{:032b}'.format(n & 0xffffffff))
    return list(map(lambda x: int(x), bits))

print(show_bits(1))