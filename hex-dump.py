def hexdump(data):
    grouped_data = group_data_by_16(data)
    current_line = ""
    current_memory_address = 0x0

    hex_dump = []

    for group in grouped_data:
        current_line += f"{current_memory_address:08x}: "

        for byte in group:
            current_line += f"{byte:02x} "

        for i in range(16 - len(group)):
            current_line += "   "

        current_line += " "

        for byte in group:
            current_line += get_ascii_translation(chr(byte))

        hex_dump.append(current_line)
        current_line = ""
        current_memory_address += 16

    return '\n'.join(hex_dump)

def dehex(text):
    data = ""
    for line in text.split("\n"):
        data += line[10:len(line) - 17].replace(" ", "")

    return bytes.fromhex(data)


def get_ascii_translation(char):
    return char if 32 <= (ascii_code := ord(char)) <= 126 else "."

def group_data_by_16(data):
    return [data[i : i + 16] for i in range(0, len(data), 16)]

data = b'CodeWars'
dump = hexdump(data)
print(dump)
print(dehex(dump))
print(data == dehex(dump))
