def infected_zeroes(lst):
    queue = [i for i, x in enumerate(lst) if x == 0]
    turns = 0
    while queue:
        for _ in range(len(queue)):
            idx = queue.pop(0)
            for adj_idx in [idx-1, idx+1]:
                if 0 <= adj_idx < len(lst) and lst[adj_idx] != 0:
                    lst[adj_idx] = 0
                    queue.append(adj_idx)
        turns += 1
    return turns - 1

# this is clever but i still don't fully understand it
# def infected_zeroes(s):
#     m = 0
#     l = 0
#     for i, n in enumerate(s):
#         if n == 0:
#             m = i if l == 0 else max(m, (i-l+1)//2)
#             l = i+1
#     return max(m, len(s)-l)


print(infected_zeroes([0]), 0, "[0]")
print(infected_zeroes([0, 1, 1, 0]), 1, "[0, 1, 1, 0]")
print(infected_zeroes([0, 1, 1, 1, 0]), 2, "[0, 1, 1, 1, 0]")
print(infected_zeroes([1, 1, 0, 1, 1]), 2, "[1, 1, 0, 1, 1]")
print(infected_zeroes([0, 1, 1, 1]), 3, "[0, 1, 1, 1]")
print(infected_zeroes([1, 1, 1, 0]), 3, "[1, 1, 1, 0]")
