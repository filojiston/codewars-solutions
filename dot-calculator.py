def calc(txt):
    first, operator, second = txt.split()
    first = len(first)
    second = len(second)
    result = 0

    if operator == '+':
        result = first + second
    elif operator == '-':
        result = first - second
    elif operator == '*':
        result = first * second
    elif operator == '//':
        result = first // second

    return '.' * result

# clever usage of eval here, although i wouldn't use it in real world
# def calculator(txt):
#     a, op, b = txt.split()
#     a, b = len(a), len(b)
#     return '.' * eval(f'{a} {op} {b}')

# this is nice too
# from operator import add, sub, mul, floordiv

# OP = {'+': add, '-': sub, '*': mul, '//': floordiv}

# def calculator(txt):
#     a, op, b = txt.split()
#     return '.' * OP.get(op, lambda x, y: 0)(len(a), len(b))


print(calc("..... + ..............."),  "....................")
print(calc("..... - ..."),  "..")
print(calc("..... - ."),  "....")
print(calc("..... * ..."),  "...............")
print(calc("..... * .."),  "..........")
print(calc("..... // .."),  "..")
print(calc("..... // ."), ".....")
print(calc(". // .."), "")
print(calc(". - ."), "")
