function simple_assembler(program) {
  const registers = {};
  const commands = {
    mov: mov,
    inc: inc,
    dec: dec,
    jnz: jnz,
  };

  const instructions = parseProgram(program);
  let idx = 0;
  while (idx >= 0 && idx < instructions.length) {
    const instruction = instructions[idx];
    idx = commands[instruction.command](registers, instruction, idx);
  }

  return registers;
}

function parseProgram(program) {
  return program.map((instruction) => {
    const parsed = instruction.split(" ");
    return {
      command: parsed[0],
      to: parsed[1],
      from: parsed[2],
    };
  });
}

function mov(registers, instruction, currIdx) {
  registers[instruction.to] = isRegister(instruction.from)
    ? registers[instruction.from]
    : Number.parseInt(instruction.from);
  return currIdx + 1;
}

function inc(registers, instruction, currIdx) {
  registers[instruction.to]++;
  return currIdx + 1;
}

function dec(registers, instruction, currIdx) {
  registers[instruction.to]--;
  return currIdx + 1;
}

function jnz(registers, instruction, currIdx) {
  shouldJump =
    (isRegister(instruction.to)
      ? registers[instruction.to]
      : Number.parseInt(instruction.to)) !== 0;
  if (!shouldJump) {
    return currIdx + 1;
  }

  return (
    currIdx +
    (isRegister(instruction.from)
      ? registers[instruction.from]
      : Number.parseInt(instruction.from))
  );
}

function isRegister(str) {
  return str.length === 1 && /^[a-z]*$/.test(str);
}

simple_assembler(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]);
simple_assembler(["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"]);
