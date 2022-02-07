def deep_count(a, curr_len=0):
    curr_len += len(a)
    for elem in a:
        if isinstance(elem, list):
            curr_len = deep_count(elem, curr_len)

    return curr_len

# nice solution
# def deep_count(a):
#     return sum(1 + (deep_count(x) if isinstance(x, list) else 0) for x in a)


print(deep_count(["x", "y", ["z"]]))
print(deep_count([1, 2, [3, 4, [5]]]))
print(deep_count([[[[[[[[[]]]]]]]]]))
print(deep_count(['cat', [['dog']], ['[bird]']]))
