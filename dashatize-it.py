def dashatize(n):
    string = str(abs(n))
    result = ""
    for i in range(len(string)):
        if int(string[i]) % 2 != 0:
            result += "-" + string[i] + "-"
        else:
            result += string[i]

    if result[0] == "-":
        result = result[1:]

    if result[-1] == "-":
        result = result[:-1]

    return result.replace("--", "-")


# similar, but more understantable and concise
def dashatize(num):
    num_str = str(num)
    for i in ["1", "3", "5", "7", "9"]:
        num_str = num_str.replace(i, "-" + i + "-")
    return num_str.strip("-").replace("--", "-")
