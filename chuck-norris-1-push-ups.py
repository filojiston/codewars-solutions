import re

def chuck_push_ups(st):
    if not isinstance(st, str) or len(st) == 0:
        return 'FAIL!!'

    nums = re.sub(r'[^01 ]', '', st)

    splitted_st = list(map(lambda x: int(x, 2), filter(lambda x: x != '', nums.split(r' '))))
    return 'CHUCK SMASH!!' if len(splitted_st) == 0 else max(splitted_st)
    

print(chuck_push_ups('01101010000101 "Oi" "Come Here!" 01101010000110 "Idiot!" 01101010000101 "You have tiny arms..." 01101010000100 01101010000011 "Fine I\'ll go to bed on my own!"'), 6790)
print(chuck_push_ups('01110001100 t. D]6 73520 4j?%:~%?A &k2Ln^/-dQ3 1011000110 812241444 1011 01010101 01111101010 10101011 110101 c,[ 18247 95812 _a&O"9 001001111110 1111100 1111 ]3K[<"z %oY}\2A 0111000110 981394826478 =0000110001 L*PhludEf J" cFH^Fd4qA KZIAH'), 6790)
print(chuck_push_ups('1 "Chuck" 10 "Stop that!" 11 "Your vest looks stupid" 100 101 110'), 6)
print(chuck_push_ups('1000 "Did you kick someone in the face today?" 1001 1010 "Will I be making dinner then?!" 1011 110'), 11)
print(chuck_push_ups('10000 "Nice Beard" 1111 "Are you wearing denim shorts?" 1110 1101'), 16)
print(chuck_push_ups(''), 'FAIL!!')
print(chuck_push_ups([]), 'FAIL!!')
print(chuck_push_ups(1), 'FAIL!!')