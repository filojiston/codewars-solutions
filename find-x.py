def find_x(n):
    return (sum_of_numbers(n * 2) * n) + ((n ** 2) * (n - 1))
        
def sum_of_numbers(n):
    return n * (n - 1) // 2


# i couldn't think of that solution, it's good
def find_x(n):
    return n ** 2 * (3 * n - 2)