from itertools import zip_longest


def columnize(items, columns_count):
    if columns_count >= len(items):
        return " | ".join(items)

    columns = [[] for _ in range(columns_count)]
    for i, item in enumerate(items):
        columns[i % columns_count].append(item)

    columns = list(map(column_formatter, columns))
    columns = map(
        lambda x: [y for y in x if not y is None], list(zip_longest(*columns))
    )
    return "\n".join(map(lambda x: " | ".join(x), columns))


def column_formatter(column):
    max_len = max(map(len, column))
    return list(map(lambda x: x.ljust(max_len), column))


print(columnize(("", "", "", ""), 2))
