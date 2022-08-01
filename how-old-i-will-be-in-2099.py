def calculate_age(year_of_birth, current_year):
    if year_of_birth == current_year:
        return "You were born this very year!"
    elif year_of_birth < current_year:
        diff = current_year - year_of_birth
        return f"You are {diff} {'year' if diff == 1 else 'years'} old."
    else:
        diff = year_of_birth - current_year
        return f"You will be born in {diff} {'year' if diff == 1 else 'years'}."

# this looks clearer
def calculate_age(year_of_birth, current_year):
    diff = abs(current_year - year_of_birth)
    plural = '' if diff == 1 else 's'
    if year_of_birth < current_year:
        return 'You are {} year{} old.'.format(diff, plural)
    elif year_of_birth > current_year:
        return 'You will be born in {} year{}.'.format(diff, plural)
    return 'You were born this very year!'