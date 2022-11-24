import java.util.*;

class Sumpowdig {
    
    public static long[] eqSumPowDig(long hmax, int exp) {
        List<Long> result = new ArrayList<>();
        for (long i = 2; i <= hmax; i++) {
            if (sumPowDig(i, exp)) {
                result.add(i);
            }
        }

        return result.stream().mapToLong(i -> i).toArray();
    }

    private static boolean sumPowDig(long n, int exp) {
        long sum = 0;
        long m = n;
        while (m > 0) {
            long digit = m % 10;
            sum += Math.pow(digit, exp);
            m /= 10;
        }
        return sum == n;
    }
}
