#include <iostream>
#include <string>
#include <cmath>

int last_digit(const std::string &str1, const std::string &str2)
{
    if (str2 == "0")
        return 1;

    int lastDigitOfInput = int(str1.back() - '0');
    int lastTwoDigitsOfPower = str2.length() > 1 ? std::stoi(str2.substr(str2.length() - 2)) : (int)(str2.back() - '0');

    int operation = (int)pow(lastDigitOfInput, lastTwoDigitsOfPower % 4 == 0 ? 4 : lastTwoDigitsOfPower % 4);

    return operation % 10;
}

int main()
{
    std::cout << last_digit("4", "1") << " " << 4 << "\n";
    std::cout << last_digit("4", "2") << " " << 6 << "\n";
    std::cout << last_digit("9", "7") << " " << 9 << "\n";
    std::cout << last_digit("10", "10000000000") << " " << 0 << "\n";
    std::cout << last_digit("1606938044258990275541962092341162602522202993782792835301376", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376") << " " << 6 << "\n";
    std::cout << last_digit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651") << " " << 7 << "\n";
    std::cout << last_digit("4200574979866020043461928", "0") << " " << 1 << "\n";
    std::cout << last_digit("2", "0") << " " << 1 << "\n";
    std::cout << last_digit("469", "200") << " " << 1 << "\n";
}
