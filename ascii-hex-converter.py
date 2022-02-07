class Converter():
    @staticmethod
    def to_ascii(h):
        result = ''
        for i in range(0, len(h), 2):
            result += chr(int(h[i:i+2], 16))

        return result

    @staticmethod
    def to_hex(s):
        result = ''
        for ch in s:
            result += hex(ord(ch))[2:]

        return result

# good solutions
# class Converter():
#     @staticmethod
#     def to_ascii(h):
#         return h.decode("hex")

#     @staticmethod
#     def to_hex(s):
#         return s.encode("hex")

# import binascii
# class Converter():
#     @staticmethod
#     def to_ascii(h):
#         return binascii.a2b_hex(h)

#     @staticmethod
#     def to_hex(s):
#         return binascii.b2a_hex(s)
