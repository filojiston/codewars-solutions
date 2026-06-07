import re

KNOWN_ACRONYMS = {
    "KPI": "key performance indicators",
    "EOD": "the end of the day",
    "TBD": "to be decided",
    "WAH": "work at home",
    "IAM": "in a meeting",
    "OOO": "out of office",
    "NRN": "no reply necessary",
    "CTA": "call to action",
    "SWOT": "strengths, weaknesses, opportunities and threats"
}

def capitalize_sentences(text):
    text = text[0].upper() + text[1:]
    return re.sub(r'(?<=\.\s)(\w)', lambda m: m.group(1).upper(), text)

def replace_word(word):
    clean = re.sub(r'\W', '', word)
    if not (clean.isupper() and len(clean) >= 3):
        return word, None
    if clean not in KNOWN_ACRONYMS:
        return None, clean
    return word.replace(clean, KNOWN_ACRONYMS[clean]), None

def acronym_buster(message):
    replaced_words = [replace_word(word) for word in message.split()]

    unknown = next((acronym for _, acronym in replaced_words if acronym), None)
    if unknown:
        return f"{unknown} is an acronym. I do not like acronyms. Please remove them from your email."

    return capitalize_sentences(" ".join(word for word, _ in replaced_words))



print(acronym_buster("BRB I need to go into a KPI meeting before EOD"), "BRB is an acronym. I do not like acronyms. Please remove them from your email.")
print(acronym_buster("I am IAM so will be OOO until EOD"), "I am in a meeting so will be out of office until the end of the day")
print(acronym_buster("Going to WAH today. NRN. OOO"), "Going to work at home today. No reply necessary. Out of office")
print(acronym_buster("We're looking at SMB on SM DMs today"), "SMB is an acronym. I do not like acronyms. Please remove them from your email.")
print(acronym_buster("OOO"), "Out of office")
print(acronym_buster("KPI"), "Key performance indicators")
print(acronym_buster("EOD"), "The end of the day")
print(acronym_buster("TBD"), "To be decided")
print(acronym_buster("TBD by EOD"), "To be decided by the end of the day")
print(acronym_buster("BRB I am OOO"), "BRB is an acronym. I do not like acronyms. Please remove them from your email.")
print(acronym_buster("WAH"), "Work at home")
print(acronym_buster("IAM"), "In a meeting")
print(acronym_buster("NRN"), "No reply necessary")
print(acronym_buster("CTA"), "Call to action")
print(acronym_buster("Hi PAB"), "PAB is an acronym. I do not like acronyms. Please remove them from your email.")
print(acronym_buster("HATDBEA"), "HATDBEA is an acronym. I do not like acronyms. Please remove them from your email.")
print(acronym_buster("LDS"), "LDS is an acronym. I do not like acronyms. Please remove them from your email.")
print(acronym_buster("PB"), "PB")
print(acronym_buster("FA"), "FA")
print(acronym_buster("CTA and HTTP"), "HTTP is an acronym. I do not like acronyms. Please remove them from your email.")
print(acronym_buster("SWOT."), "Strengths, weaknesses, opportunities and threats.")
print(acronym_buster("HTTP"), "HTTP is an acronym. I do not like acronyms. Please remove them from your email.")
print(acronym_buster("Please WAH today. KPI on track"), "Please work at home today. Key performance indicators on track")
print(acronym_buster("The advert needs a CTA. NRN before EOD."), "The advert needs a call to action. No reply necessary before the end of the day.")
print(acronym_buster("I sent you a RFP yesterday."), "RFP is an acronym. I do not like acronyms. Please remove them from your email.")
print(acronym_buster("My SM account needs some work."), "My SM account needs some work.")
