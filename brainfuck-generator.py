def to_brainfuck(string):
    return "".join("+" * ord(i) + ".>" for i in string)