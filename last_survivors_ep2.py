def last_survivors(string):
    if (len(string) == 0):
        return ""
    while (string != (y := calculate(string))):
        string = y

    return string


def calculate(string):
    sorted_str = "".join(sorted(string))
    result = ''
    i = 0
    while i < len(sorted_str) - 1:
        if (sorted_str[i] == sorted_str[i + 1]):
            foo = chr(ord(sorted_str[i]) + 1) if sorted_str[i] != 'z' else 'a'
            result += foo
            i += 1
        else:
            result += sorted_str[i]
        i += 1
    result += sorted_str[len(sorted_str) - 1] if sorted_str.count(
        sorted_str[len(sorted_str) - 1]) % 2 != 0 else ''
    return result


print(last_survivors(
    "ababb"))
