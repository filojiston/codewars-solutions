def modify_multiply(st, loc, num):
    word_to_repeat = st.split()[loc]
    return "-".join([word_to_repeat for _ in range(num)])


print(modify_multiply("This is a string", 3, 5),
      "string-string-string-string-string", "The string is incorrect")
print(modify_multiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.",
                      8, 10), "that-that-that-that-that-that-that-that-that-that")
print(modify_multiply(
    "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence", 1, 1), "means")
print(modify_multiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",
                      6, 8), "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance")
print(modify_multiply(
    "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.", 2, 5), "around-around-around-around-around")
