def string_transformer(s):
    words = s.split(" ")
    words = list(map(lambda word: transform_word(word), words))[::-1]
    return " ".join(words)


def transform_word(word):
    if len(word) < 0:
        return ' '

    return word.swapcase()

# here is one-liner version from nearly 100 warriors
def string_transformer(s):
    return ' '.join(s.swapcase().split(' ')[::-1])

print(string_transformer("Example string"), "STRING eXAMPLE")
print(string_transformer("Example Input"), "iNPUT eXAMPLE")
print(string_transformer("To be OR not to be That is the Question"),
      "qUESTION THE IS tHAT BE TO NOT or BE tO")
# Should handle empty string
print(string_transformer(""), "")
# Should handle multiple spaces
print(string_transformer("You Know When  THAT  Hotline Bling"),
      "bLING hOTLINE  that  wHEN kNOW yOU")
# Should handle leading space
print(string_transformer(" A b C d E f G "), " g F e D c B a ")
