def fixed_xor(a, b):
    if len(a) <= 0 or len(b) <= 0:
        return ''

    longest, shortest = (a, b) if len(a) > len(b) else (b, a)
    longest = longest[:len(shortest)]
    len_shortest = len(shortest)

    longest = bin(int(longest, 16))[2:]
    shortest = bin(int(shortest, 16))[2:]

    return (hex(int(longest, 2) ^ int(shortest, 2))[2:]).rjust(len_shortest, '0')

# nice
def fixed_xor(a, b):
    return "".join(f"{int(x, 16)^int(y, 16):x}" for x, y in zip(a, b))


print(fixed_xor('ab3f', 'ac'))
print(fixed_xor('aadf', 'bce2'))
