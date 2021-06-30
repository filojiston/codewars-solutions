function powerOf4(n) {
  if (typeof n != 'number') return false;

  return n % 4 == 0 && n > 1;
}
