public class Kata {
    // timed out, but works i guess
    public static long nextSmaller(long n) {
        for (long i = n - 1; i > 0; i--) {
            if (hasSameDigits(n, i)) {
                return i;
            }
        }

        return -1;
    }

    public static boolean hasSameDigits(long n1, long n2) {
        final int[] primes = new int[] { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };
        int hash1 = 1;
        int hash2 = 1;

        while (n1 > 0) {
            hash1 *= primes[(int) (n1 % 10)];
            n1 /= 10;
        }

        while (n2 > 0) {
            hash2 *= primes[(int) (n2 % 10)];
            n2 /= 10;
        }

        return hash1 == hash2;
    }

    // find smaller number can be constructed from the digits of n
    // if no such number exists, return -1
    public static long nextSmaller(long n) {
        char[] digits = Long.toString(n).toCharArray();
        // find the first index where the digit is smaller than the digit to its right
        int xIdx = digits.length - 2;
        while (xIdx >= 0 && digits[xIdx] <= digits[xIdx + 1]) {
            xIdx--;
        }
        // if no such index exists, return -1
        if (xIdx < 0) {
            return -1;
        }
        // find the smallest digit to the right of xIdx that is smaller than
        // digits[xIdx]
        int yIdx = digits.length - 1;
        while (yIdx > xIdx && digits[yIdx] >= digits[xIdx]) {
            yIdx--;
        }
        // swap digits[xIdx] and digits[yIdx]
        char temp = digits[xIdx];
        digits[xIdx] = digits[yIdx];
        digits[yIdx] = temp;

        // i couldn't think of that trick, nice
        String[] sarr = String.valueOf(digits).split("");
        java.util.Arrays.sort(sarr, xIdx + 1, digits.length, java.util.Collections.reverseOrder());
        long r = Long.valueOf(String.join("", sarr));
        return String.valueOf(r).length() == digits.length ? r : -1;
    }

    // finally, a solution that works
    public static long nextSmaller(long n) {
        List<Integer> digits = new ArrayList<>();
        long original = n;
        while (n > 0) {
            digits.add((int) (n % 10));
            n /= 10;
        }
        Collections.reverse(digits);
        int i = digits.size() - 1;
        while (i > 0 && digits.get(i) >= digits.get(i - 1))
            --i;
        if (i == 0)
            return -1;
        int j = digits.size() - 1;
        while (j > i && digits.get(j) >= digits.get(i - 1))
            --j;
        Collections.swap(digits, i - 1, j);
        Collections.sort(digits.subList(i, digits.size()));
        Collections.reverse(digits.subList(i, digits.size()));

        long result = digits.stream().mapToLong(Long::valueOf).reduce((x, y) -> 10 * x + y).getAsLong();

        return (int) (Math.log10(result) + 1) == (int) (Math.log10(original) + 1) ? result : -1;
    }
}
