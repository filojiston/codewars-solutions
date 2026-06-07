def seq_to_one(n):
    return list(range(n, 0, -1)) if n > 0 else list(range(n, 2))

print(seq_to_one(5),[5,4,3,2,1])
print(seq_to_one(-1),[-1,0,1])
