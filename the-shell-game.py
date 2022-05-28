def find_the_ball(start, swaps):
    final_position = start

    for swap in swaps:
        if final_position in swap:
            final_position = swap[0] if final_position == swap[1] else swap[1]

    return final_position


def test_empty_swap():
    assert find_the_ball(5, []) == 5


def test_legit_swap():
    assert find_the_ball(0, [(0, 1), (2, 1), (0, 1)]) == 2


print(find_the_ball(5, []), 5)
print(find_the_ball(0, [(0, 1), (2, 1), (0, 1)]), 2)
