fn even_or_odd(i: i32) -> &'static str {
    if i % 2 == 0 {
        return "Even";
    }

    "Odd"
}

// i wanted to solve it with match but i couldn't think the solution
// this is what i wanted to do
fn even_or_odd(i: i32) -> &'static str {
    match i % 2 {
        0 => "Even",
        _ => "Odd",
    }
}
