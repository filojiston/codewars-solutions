def letter_frequency(text):
    text_lowercase = text.lower()
    freqs = {}

    for ch in text_lowercase:
        if ch.isalpha():
            freqs[ch] = freqs.get(ch, 0) + 1

    freqs = sorted(list(freqs.items()), key=lambda x: (-x[1], x[0]))
    return freqs


letter_frequency('aaAabb dddDD hhcc')
