def krazy_king_blackjack(hand, king_value):
    score = sum(map(lambda card: 0 if card == 'K' else 0 if card == 'A' else 10 if card == 'J' or card == 'Q' else int(card), hand))

    normal_score = score + 10 * hand.count('K')
    score_for_king_value = score + king_value * hand.count('K')

    for _ in range(hand.count('A')):
        normal_score += 11 if normal_score + 11 <= 21 else 1
        score_for_king_value += 11 if score_for_king_value + 11 <= 21 else 1

    if normal_score > 21 and score_for_king_value > 21:
        return False

    return max(valid_score for valid_score in (normal_score, score_for_king_value) if valid_score <= 21)

# wow. my solution doesn't do well with aces. this, i tought about solving it like this but
# solution is just beatiful and concise. liked it very much
def krazy_king_blackjack(hand, king_value):
    from itertools import product
    VALUE = {str(n): (n,) for n in range(1, 11)}
    VALUE.update({'J': (10,), 'Q': (10,), 'K': (10, king_value), 'A': (1, 11)})
    possible = [sum(comb) for comb in product(*(VALUE[card] for card in hand)) if sum(comb) <= 21]
    print(possible)
    return max(possible) if possible else False


print(krazy_king_blackjack(['K', '8'], 7), 18)
print(krazy_king_blackjack(['K', 'A', '3'], 7), 21)
print(krazy_king_blackjack(['J', 'K', 'K'], 4), 18)
