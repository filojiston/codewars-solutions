// i was creating all possible sequences with recursion and all that stuff
// but... ofc it was too slow
// so a quick google search and voila! https://www.youtube.com/watch?v=yP5suwxou7U
// thanks for the video
pub fn run(speed: u32, time: u32) -> u32 {
    let mut distance = speed * time;
    let max_sprints = (time as f32 / 2.0).ceil() as u32;

    for i in 0..max_sprints {
        let sprint_distance = if speed > 3 * i { speed - 3 * i } else { 0 };
        distance += sprint_distance;
    }

    distance
}

fn main() {
    assert_eq!(run(2, 4), 10);
    assert_eq!(run(2, 3), 8);
    assert_eq!(run(1, 1), 2);
    assert_eq!(run(49, 50), 2875);
    assert_eq!(run(829, 135), 161453);
}
