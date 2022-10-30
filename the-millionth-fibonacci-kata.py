# modified version of https://stackoverflow.com/questions/18172257/efficient-calculation-of-fibonacci-series
# read more about the Fibonacci sequence at https://en.wikipedia.org/wiki/Fibonacci_number#Matrix_form
def fib(n):
    if n == 0:
        return 0

    v1, v2, v3 = 1, 1, 0
    loop = bin(n)[3:] if n >= 0 else bin(-n)[3:]
    for rec in loop:
        calc = v2 * v2
        v1, v2, v3 = v1 * v1 + calc, (v1 + v3) * v2, calc + v3 * v3
        if rec == '1':
            v1, v2, v3 = v1 + v2, v1, v2

    return v2 if n >= 0 else int((-1) ** (n - 1)) * v2


print(fib(0))
