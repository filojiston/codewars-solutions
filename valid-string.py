def valid_word(seq, word):
    if word == '':
        return True
    else:
        word_len = len(word)
        return any([(word[:i] in seq) and valid_word(seq, word[i:]) for i in range(1, word_len + 1)])


print(valid_word(['code', 'war'], 'codewars'))
