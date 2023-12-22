const frame = (text, char) => {
  const maxLengthWord = Math.max(...text.map((word) => word.length));
  const borderWidth = maxLengthWord + 4;
  const border = [char.repeat(borderWidth)];
  for (const word of text) {
    border.push(
      `${char} ${word}${" ".repeat(maxLengthWord - word.length)} ${char}`
    );
  }
  border.push(char.repeat(borderWidth));
  return border.join("\n");
};
