def olympic_ring(string):
    ringy_letters = {
        'a': 1,
        'b': 1,
        'd': 1,
        'e': 1,
        'g': 1,
        'o': 1,
        'p': 1,
        'q': 1,
        'A': 1,
        'B': 2,
        'D': 1,
        'O': 1,
        'P': 1,
        'Q': 1,
        'R': 1
    }

    letters = list(string)
    
    score = 0
    for letter in letters:
        score += ringy_letters.get(letter, 0)

    score = score // 2

    if score <= 1:
        return 'Not even a medal!'
    elif score == 2:
        return 'Bronze!'
    elif score == 3:
        return 'Silver!'
    else:
        return 'Gold!'

print(olympic_ring('wHjMudLwtoPGocnJ'), 'Bronze!')
print(olympic_ring('eCEHWEPwwnvzMicyaRjk'), 'Bronze!')
print(olympic_ring('JKniLfLW'), 'Not even a medal!')
print(olympic_ring('EWlZlDFsEIBufsalqof'), 'Silver!')
print(olympic_ring('IMBAWejlGRTDWetPS'), 'Gold!')