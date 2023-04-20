def second_symbol(s, symbol):
    occurences = 0
    for i, c in enumerate(s):
        if c == symbol:
            occurences += 1
        if occurences == 2:
            return i
    return -1

# i did not know we can pass index to the find method
def second_symbol(s, symbol):
    return s.find(symbol, s.find(symbol) + 1)

# this is clever too (using try except)
def second_symbol(s, symbol):
    try:
        return s.index(symbol, s.index(symbol) + 1)
    except ValueError:
        return -1


print(second_symbol('Hello world!!!', 'l'), 3,
      'Find the index of the second symbol "l" in the string')
print(second_symbol('Hello world!!!', 'o'), 7,
      'Find the index of the second symbol "o" in the string')
print(second_symbol('Hello world!!!', 'A'), -
      1, 'The symbol "A" is not in the string')
print(second_symbol('', 'q'), -1,
      'The symbol "q" is not in the string')
print(second_symbol('Hello', '!'), -1,
      'The symbol "!" is not in the string')
