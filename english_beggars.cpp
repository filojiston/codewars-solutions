#include <vector>

std::vector<int> beggars(const std::vector<int> &values, unsigned int n)
{

    if (n == 0)
        return std::vector<int>();

    std::vector<int> beggs(n, 0);
    int counter = 0;

    for (auto value : values)
    {
        beggs[counter] += value;
        counter++;
        if (counter % n == 0 && counter != 0)
        {
            counter = 0;
        }
    }

    return beggs;
}
