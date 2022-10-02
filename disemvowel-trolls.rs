// for all of my solutions, using char.to_ascii_lowercase()
// instead of adding every uppercase letter to the vowels
// would be a better solution

// solution with replace
fn disemvowel(s: &str) -> String {
    s.replace(|c: char| "aeiouAEIOU".contains(c), "")
}

// solution with filter
fn disemvowel(s: &str) -> String {
    s.chars().filter(|c| !"aeiouAEIOU".contains(*c)).collect()
}

// solution with for loop
fn disemvowel(s: &str) -> String {
    let mut result = String::new();
    for c in s.chars() {
        if !"aeiouAEIOU".contains(c) {
            result.push(c);
        }
    }
    result
}

// solution with matches
fn disemvowel(s: &str) -> String {
    s.matches(|c: char| !"aeiouAEIOU".contains(c)).collect()
}

// solution with foreach
fn disemvowel(s: &str) -> String {
    let mut result = String::new();
    s.chars().for_each(|c| {
        if !"aeiouAEIOU".contains(c) {
            result.push(c);
        }
    });
    result
}
