from itertools import permutations
from hashlib import sha256

def sha256_cracker(hash, chars):
    perms = permute_string(chars)

    for string in perms:
        encoded = sha256(string.encode('utf-8')).hexdigest()
        if hash == encoded:
            return string

    return None

def permute_string(string):
    return [''.join(p) for p in permutations(string)]
