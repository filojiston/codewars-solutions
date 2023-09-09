def string_suffix(str_):
    def longest_prefix_common_len(s1, subs1):
        result = 0
        for i in range(len(subs1)):
            if s1[i] == subs1[i]:
                result += 1
            else:
                break
        return result

    return sum(longest_prefix_common_len(str_, str_[i:]) for i in range(len(str_)))


# clever, i didn't know about commonprefix
def string_suffix(s):
    from os.path import commonprefix

    return sum(len(commonprefix([s, s[i:]])) for i in range(len(s)))


print(string_suffix("aa"), 3)
print(string_suffix("abc"), 3)
print(string_suffix("ababaa"), 11)
