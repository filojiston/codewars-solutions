# brute force, sadly timed out
# def subsequence_sums(arr, s):
#     count = 0

#     for i in range(len(arr)):
#         for j in range(i + 1, len(arr) + 1):
#             if sum(arr[i:j]) == s:
#                 count += 1

#     return count

# this one timed out too
# def subsequence_sums(arr, s):
#     count = 0

#     for i in range(len(arr)):
#         current_sum = arr[i]
#         if current_sum == s:
#             count += 1
#         for j in range(i + 1, len(arr)):
#             current_sum += arr[j]
#             if current_sum == s:
#                 count += 1

#     return count

# whenever you feel you can't do anything, just throw in a hashmap xd
def subsequence_sums(arr, s):
    count = 0
    current_sum = 0
    sum_map = {0: 1}
    for i in range(len(arr)):
        current_sum += arr[i]
        if current_sum - s in sum_map:
            count += sum_map[current_sum - s]

        sum_map[current_sum] = sum_map.setdefault(current_sum, 0) + 1

    return count


print(subsequence_sums([1, 2, 3, -3, -2, -1], 0), 3)
print(subsequence_sums([1, 5, -2, 4, 0, -7, -3, 6], 4), 4)
print(subsequence_sums([1, -1, 0], 0), 3)
print(subsequence_sums(
    [9, -2, -5, 8, 6, -10, 0, -4], -1), 2)
