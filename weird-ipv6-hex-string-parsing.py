# def parse_IPv6(iPv6):
#     splitted = []
#     temp = ''
#     count = 0
#     result = ''
#
#     # split the ip
#     for char in iPv6:
#         if count < 4:
#             temp += char
#         else:
#             splitted.append(temp)
#             temp = ''
#             count = 0
#             continue
#         count += 1
#     splitted.append(temp)
#
#     temp = 0
#     # calculate integer values
#     for part in splitted:
#         for char in part:
#             temp += int(char, 16)
#         result += str(temp)
#         temp = 0
#     # return result
#     return result


def parse_IPv6(iPv6):
    splitted = iPv6.split(iPv6[4])
    result = ''
    for part in splitted:
        result += calculate_int_value(part)

    return result

def calculate_int_value(arr):
    result = 0
    for x in arr:
        result += int(x, 16)

    return str(result)

print(parse_IPv6("1234:5678:9ABC:D00F:1111:2222:3333:4445"), "10264228481217")
print(parse_IPv6("5454:FBFD:9ABC:AAAA:FFFF:2222:FBDE:0101"), "18544240608532")
print(parse_IPv6("0000:0000:0000:0000:0000:0000:0000:0000"), "00000000")
print(parse_IPv6("FFFF:FFFF:BBBB:CCCC:1212:AABC:0000:1111"), "6060444864304")
print(parse_IPv6("ACDD-0101-9ABC-AAAA-FFFF-2222-FBDE-ACCC"), "48242406085346")
print(parse_IPv6("5454rFBFDr9ABCrAA0ArFAFFr2222rFBDEr0101"), "18544230558532")
print(parse_IPv6("F234#5678#9ABC#D00F#1111#2222#3333#4485"), "24264228481221")
