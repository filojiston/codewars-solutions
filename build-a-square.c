#include <stdlib.h>
#include <stddef.h>

char *generate_shape(size_t n)
{
    char *shape = malloc(n * (n + 1) * sizeof(char));
    for (size_t i = 0; i < n; i++)
    {
        for (size_t j = 0; j < n + 1; j++)
        {
            if (j == n)
                shape[i * (n + 1) + j] = '\n';
            else
                shape[i * (n + 1) + j] = '*';
        }
    }
    shape[n * (n + 1) - 1] = '\0';
    return shape;
}
