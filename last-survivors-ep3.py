def last_survivors(arr, nums):
    char_array, max_len = build_char_array(arr)
    
    for i in range(max_len):
        deleted_letters = 0
        curr_idx = 0
        while deleted_letters < nums[i]:
            curr = char_array[curr_idx]
            if curr[i] != ' ':
                char_array[curr_idx] = remove_char_at_index(curr, i)
                deleted_letters += 1
            curr_idx += 1
            if (curr_idx > len(char_array) - 1):
                break
            
    return "".join([x for x in char_array]).replace(" ", '')
            
def build_char_array(arr):
    char_array = []
    max_len = -1
    for string in arr:
        if len(string) > max_len:
            max_len = len(string)
            
    for string in arr:
        while len(string) < max_len:
            string += " "
        char_array.append(string)
        
    return char_array[::-1], max_len

def remove_char_at_index(string, idx):
    return string[:idx] + " " + string[idx+1:]

def minimum(num1, num2):
    return num1 if num1 < num2 else num2
            