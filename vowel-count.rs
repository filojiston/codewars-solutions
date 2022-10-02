// solution with good old for loop
fn get_count(string: &str) -> usize {
    let mut vowels_count: usize = 0;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for c in string.chars() {
        if vowels.contains(&c) {
            vowels_count += 1;
        }
    }

    vowels_count
}

// solution with foreach loop
fn get_count(string: &str) -> usize {
    let mut vowels_count: usize = 0;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    string.chars().for_each(|c| {
        if vowels.contains(&c) {
            vowels_count += 1;
        }
    });

    vowels_count
}

// solution with filter
fn get_count(string: &str) -> usize {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    string.chars().filter(|c| vowels.contains(c)).count()
}

// solution with matches
fn get_count(string: &str) -> usize {
    string.matches(|c: char| "aeiou".contains(c)).count()
}
