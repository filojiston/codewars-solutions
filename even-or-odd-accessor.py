class EvenOrOdd:
    def __call__(self, n):
        return "Even" if n % 2 == 0 else "Odd"

    def __getitem__(self, n):
        return "Even" if n % 2 == 0 else "Odd"


even_or_odd = EvenOrOdd()

print(even_or_odd(1), "Odd")
print(even_or_odd[3], "Odd")
print(even_or_odd(2), "Even")
print(even_or_odd[4], "Even")
print(even_or_odd(-1), "Odd")
print(even_or_odd[-5], "Odd")
print(even_or_odd(-2), "Even")
print(even_or_odd[-12], "Even")
print(even_or_odd(0), "Even")
print(even_or_odd[0], "Even")
