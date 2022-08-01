def alphabetic(s):
    for i in range(len(s) - 1):
        curr_char_ascii = ord(s[i])
        next_char_ascii = ord(s[i + 1])
        if curr_char_ascii > next_char_ascii:
            return False

    return True

# solution without using explicit loops
def alphabetic(s):
    return sorted(s) == list(s)

# same but looks clearer to me
def alphabetic(s):
    return s == ''.join(sorted(s))

# that looks good too
def alphabetic(s):
    return all(a<=b for a,b in zip(s, s[1:]))

