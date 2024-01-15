def bonus(arr, s):
    minimum = min(arr)
    ratios = [(num/minimum)**-1 for num in arr]
    total = sum(ratios)
    return [round(s*ratio/total) for ratio in ratios]



print(bonus([18, 15, 12], 851), [230, 276, 345])

