def decodeMorse(morse_code):
    words = morse_code.strip().split('   ')
    result = []
    for word in words:
        result.append(''.join(map(lambda x: MORSE_CODE[x], word.split(' '))))
    return ' '.join(result)

def decodeMorse(morseCode):
    return ' '.join(''.join(MORSE_CODE[letter] for letter in word.split(' ')) for word in morseCode.strip().split('   '))
