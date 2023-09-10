import java.util.HashSet;
import java.util.Map;
import java.util.Optional;
import java.util.Map.Entry;

public class TwoSum {
    public static int[] twoSum(int[] numbers, int target) {
        HashSet<Entry<Integer, Integer>> seen = new HashSet<Entry<Integer, Integer>>();
        for (int i = 0; i < numbers.length; i++) {
            Optional<Integer> current = hasSeen(seen, numbers[i]);
            if (current.isPresent()) {
                return new int[] {current.get(), i};
            }
            seen.add(Map.entry(i, target - numbers[i]));
        }

        return null;
    }

    public static Optional<Integer> hasSeen(HashSet<Entry<Integer, Integer>> seen, int num) {
        for (Entry<Integer, Integer> entry : seen) {
            if (entry.getValue() == num)
                return Optional.of(entry.getKey());
        }
        return Optional.empty();
    }

    public static void main(String[] args) {
        int[] result = twoSum(new int[] {1, 2, 3}, 4);
        System.out.printf("%d,%d", result[0], result[1]);
    }
}
