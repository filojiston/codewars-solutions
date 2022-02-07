from collections import Counter
from copy import deepcopy


def find_uniq(arr):
    formatted_input = deepcopy(arr)
    formatted_input_join = ''.join(formatted_input)
    letter_distribution = Counter(formatted_input_join).most_common()

    return _find_result(arr, letter_distribution)


def _find_result(arr, letter_distribution):
    for elem in arr:
        if letter_distribution[-1:][0][0] in elem:
            return elem


print(find_uniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb')
print(find_uniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo')
print(find_uniq(['    ', 'a', '  ']), 'a')
print(find_uniq(['p', 'e', 'p', 'p']), 'e')
print(find_uniq(['foobar', 'barfo', 'fobara',
      '   ', 'fobra', 'oooofrab']), '   ')
