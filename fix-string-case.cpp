#include <iostream>
#include <string>
#include <algorithm>

std::string solve(const std::string& str){
  unsigned int uppercase_count = 0;
  unsigned int lowercase_count = 0;
  
  std::string result = str;

  for (unsigned int i = 0; i < str.length(); i++) {
    if (isupper(str[i]))  uppercase_count++;
    if (islower(str[i]))  lowercase_count++;
  }

  if (uppercase_count > lowercase_count) {
    std::transform(result.begin(), result.end(), result.begin(), ::toupper);
  } else {
    std::transform(result.begin(), result.end(), result.begin(), ::tolower);
  }

  return result;
  
}


int main() {
  std::cout << solve("coDe") << "code";
  std::cout << solve("CODe") << "CODE";
  std::cout << solve("coDE") << "code";
}