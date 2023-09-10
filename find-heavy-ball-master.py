def find_ball(scales):
    def compare_three(pan):
        w = scales.get_weight([pan[0]], [pan[1]])
        if w < 0:
            return pan[0]
        if w > 0:
            return pan[1]
        return pan[2]

    leftPan = [0, 1, 2]
    rightPan = [3, 4, 5]
    w = scales.get_weight(leftPan, rightPan)
    if w < 0:
        return compare_three(leftPan)
    if w > 0:
        return compare_three(rightPan)
    return 6 if scales.get_weight([6], [7]) == -1 else 7


# clever
def find_ball(scales):
    part = [[None, 0, 1], [2, 3, 4], [5, 6, 7]]
    res1 = scales.get_weight(part[-1], part[1])
    res2 = scales.get_weight([part[res1][-1]], [part[res1][1]])
    return part[res1][res2]
