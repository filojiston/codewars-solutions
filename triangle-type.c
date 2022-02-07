#include <stdio.h>
#include <math.h>

int isValid(int a, int b, int c)
{
    return (a + b > c) && (a + c > b) && (b + c > a);
}

int triangleType(int a, int b, int c)
{
    if (!isValid(a, b, c))
        return 0;
    // s means squared
    int as = a * a;
    int bs = b * b;
    int cs = c * c;

    if ((as == bs + cs) || (bs == as + cs) || (cs == as + bs))
        return 2;
    else if ((as > bs + cs) || (bs > as + cs) || (cs > as + bs))
        return 3;
    else
        return 1;
}

int main()
{
    printf("a: %d, b: %d, c: %d, exp: %d, res: %d\n", 7, 3, 2, 0,
           triangleType(7, 3, 2));
    printf("a: %d, b: %d, c: %d, exp: %d, res: %d\n", 2, 4, 6, 0,
           triangleType(2, 4, 6));
    printf("a: %d, b: %d, c: %d, exp: %d, res: %d\n", 8, 5, 7, 1,
           triangleType(8, 5, 7));
    printf("a: %d, b: %d, c: %d, exp: %d, res: %d\n", 3, 4, 5, 2,
           triangleType(3, 4, 5));
    printf("a: %d, b: %d, c: %d, exp: %d, res: %d\n", 7, 12, 8, 3,
           triangleType(7, 12, 8));
    return 0;
}
