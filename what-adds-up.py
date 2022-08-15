def addsup(a1, a2, a3):
    sums = []

    for num1 in a1:
        for num2 in a2:
            sums.append([num1, num2, num1+num2])

    result = []
    for s in sums:
        if s[2] in a3:
            result.append(s)

    return result

print(addsup([1,2,5],[3,1],[5,4,6]))