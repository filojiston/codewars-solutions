def arrange(s):
    t = []
    is_reverse = False
    begin = 0
    end = len(s) - 1

    while not len(t) == len(s):
        if is_reverse:
            t.append(s[end])
            if len(t) == len(s):
                break
            t.append(s[begin])
        else:
            t.append(s[begin])
            if len(t) == len(s):
                break
            t.append(s[end])

        begin += 1
        end -= 1
        is_reverse = not is_reverse

    return t

# nice solution
# from collections import deque

# def arrange(s):
#     q=deque(s)
#     return [q.pop() if 0<i%4<3 else q.popleft() for i in range(len(s))]

# one liner!! this is magic
# arrange=lambda s:[s[[i,-i,~i,i][i%4]//2]for i in range(len(s))]


print(arrange([4, 3, 2]))
print(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]))
