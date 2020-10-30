def remove_parentheses(s):
  result = ''
  count = 0
  for char in s:
    if char == '(':
      count += 1
    if char == ')':
      count -= 1
    if not count and not char in '()':
      result += char

  return result

print(remove_parentheses("example(unwanted thing)example"), "exampleexample")
print(remove_parentheses("example (unwanted thing) example"), "example  example")
print(remove_parentheses("a (bc d)e"), "a e")
print(remove_parentheses("a(b(c))"), "a")
print(remove_parentheses("hello example (words(more words) here) something"), "hello example  something")
print(remove_parentheses("(first group) (second group) (third group)"), "  ")