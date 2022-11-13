def swap(st):
    return st.translate(str.maketrans('aeiou', 'AEIOU'))
