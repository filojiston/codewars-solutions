PUNCH_TIMES = 3

# -1 was the important detail in here
# when the number of monsters is power of PUNCH_TIMES, it calculates wrong result
# so we need to subtract 1 from monsters
def kill_monsters(health, monsters, damage):
    hits = (monsters - 1) // PUNCH_TIMES
    total_damage = hits * damage
    health -= total_damage
    return f"hits: {hits}, damage: {total_damage}, health: {health}" if health > 0 else "hero died"


print("hits: 2, damage: 20, health: 30", kill_monsters(50, 7, 10), "For input (50, 7, 10)")
print("hits: 0, damage: 0, health: 20", kill_monsters(20, 1, 10), "For input (20, 1, 10)")
print("hero died", kill_monsters(30, 4, 50), "For input (30, 4, 50)")
