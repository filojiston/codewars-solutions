def string_clean(s):
    return "".join([ch for ch in list(s) if not ch.isdigit()])

# well i could do it without list too
def string_clean(s):
    return "".join([ch for ch in s if not ch.isdigit()])

# and of course it can be done with regex
import re

def string_clean(s):
    return re.sub(r'\d', '', s)