def vowel_one(s):
    return ''.join(map(lambda x: '1' if x.lower() in 'aeiou' else '0', s))
