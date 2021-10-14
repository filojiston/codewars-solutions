def flatten(*args):
    result = []
    for elem in args:
        if isinstance(elem, list):
            result += flatten(*elem)
        else:
            result.append(elem)

    return result


print(flatten(), [])
print(flatten(1, 2, 3), [1, 2, 3])
print(flatten([1, 2], [3, 4, 5], [6, [7], [[8]]]), [1, 2, 3, 4, 5, 6, 7, 8])
print(flatten(1, 2, ['9', [], []], None), [1, 2, '9', None])
print(flatten(['hello', 2, ['text', [4, 5]]], [[]], '[list]'),
      ['hello', 2, 'text', 4, 5, '[list]'])
