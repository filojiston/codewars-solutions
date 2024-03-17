from collections import Counter

def find_word(num_let, max_ssw):
    words = [w for w in WORD_LIST if len(w) == num_let]
    ssw_map = {w: calculate_ssw(w) for w in words}
    words = list(filter(lambda x: ssw_map.get(x) <= max_ssw, words))
    words = sorted(sorted(words, reverse=True), key=lambda x: calculate_ssw(x), reverse=True)
    return words[0] if len(words) > 0 else None


def calculate_ssw(word):
    freqs = Counter(word)
    return sum(map(lambda ch: ord(ch) * freqs[ch], freqs.keys()))
