import numpy


def snail(snail_map):
    result = []

    while len(snail_map) > 0:
        result += snail_map[0]
        del snail_map[0]
        if len(snail_map) > 0:
            snail_map = numpy.rot90(snail_map, 1).tolist()

    return result


array = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]
expected = [1, 2, 3, 6, 9, 8, 7, 4, 5]
print(snail(array), expected)


array = [[1, 2, 3],
         [8, 9, 4],
         [7, 6, 5]]
expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(snail(array), expected)
