def hex_string_to_RGB(s):
    r, g, b = list(map(lambda k: int(k, 16), [
                   s[x] + s[x+1] for x in range(1, len(s) - 1, 2)]))

    return {'r': r, 'g': g, 'b': b}
