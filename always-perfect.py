import math

def check_root(s):
    try:
        nums = [int(x) for x in s.split(',')]
        if len(nums) != 4:
            return 'incorrect input'
    except ValueError:
        return 'incorrect input'

    if any(b != a + 1 for a, b in zip(nums, nums[1:])):
        return 'not consecutive'

    product = math.prod(nums) + 1
    root = int(math.sqrt(product))

    return f'{product}, {root}'



print(check_root('4,5,6,7'), '841, 29')
print(check_root('3,s,5,6'), 'incorrect input')
print(check_root('11,13,14,15'), 'not consecutive')
print(check_root('10,11,12,13,15'), 'incorrect input')
print(check_root('10,11,12,13'), '17161, 131')
print(check_root('ad,d,q,tt,v'), 'incorrect input')
print(check_root('//,;;,/,..,'), 'incorrect input')
print(check_root('1,2,3,4'), '25, 5')
print(check_root('1015,1016,1017,1018'), '1067648959441, 1033271')
print(check_root('555,777,444,111'), 'not consecutive')
print(check_root('20,21,22,24'), 'not consecutive')
print(check_root('9,10,10,11'), 'not consecutive')
print(check_root('11254,11255,11256,11258'), 'not consecutive')
print(check_root('25000,25001,25002,25003'), '390718756875150001, 625075001')
print(check_root('2000000,2000001,2000002,2000003'), '16000048000044000012000001, 4000006000001')
print(check_root('4,5,6,q'), 'incorrect input')
print(check_root('5,6,7'), 'incorrect input')
print(check_root('3,5,6,7'), 'not consecutive')
print(check_root('-4,-3,-2,-1'), '25, 5')
print(check_root('-1,0,1,2'), '1, 1')
