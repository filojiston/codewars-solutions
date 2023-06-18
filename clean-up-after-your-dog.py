def crap(garden, bags, cap):
    garden = [item for row in garden for item in row]
    if "D" in garden:
        return "Dog!!"
    elif garden.count("@") > bags * cap:
        return "Cr@p"
    else:
        return "Clean"


print(
    crap([["_", "_", "_", "_"], ["_", "_", "_", "@"], ["_", "_", "@", "_"]], 2, 2),
    "Clean",
)
print(
    crap([["_", "_", "_", "_"], ["_", "_", "_", "@"], ["_", "_", "@", "_"]], 1, 1),
    "Cr@p",
)
print(crap([["_", "_"], ["_", "@"], ["D", "_"]], 2, 2), "Dog!!")
print(
    crap([["_", "_", "_", "_"], ["_", "_", "_", "_"], ["_", "_", "_", "_"]], 2, 2),
    "Clean",
)
print(crap([["@", "@"], ["@", "@"], ["@", "@"]], 3, 2), "Clean")
