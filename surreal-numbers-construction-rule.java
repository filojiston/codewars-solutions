import java.util.*;

public class surreal_numbers_construction_rule {
    public static boolean isSurreal(String l, String r) {
        if (l.length() == 0 || r.length() == 0)
            return true;

        Double[] leftSide = Arrays.stream(l.split("\\s+")).map(surreal_numbers_construction_rule::parseDouble)
                .toArray(Double[]::new);
        Double[] rightSide = Arrays.stream(r.split("\\s+")).map(surreal_numbers_construction_rule::parseDouble)
                .toArray(Double[]::new);

        for (Double rightElem : rightSide) {
            for (Double leftElem : leftSide) {
                if (rightElem <= leftElem)
                    return false;
            }
        }

        return true;
    }

    private static Double parseDouble(String s) {
        Double[] elems = Arrays.stream(s.split("/")).map(Double::parseDouble).toArray(Double[]::new);
        if (elems.length > 1) {
            return elems[0] / elems[1];
        }
        return elems[0];
    }

    public static void main(String[] args) {
        System.out.println(isSurreal("-1", "1") == true);
        System.out.println(isSurreal("1", "-1") == false);
        System.out.println(isSurreal("1/2", "3/4") == true);
        System.out.println(isSurreal("-3 -2 -1 0", "17") == true);
        System.out.println(isSurreal("18 33 -2 19 -1/8", "99 34 200/3") == true);
        System.out.println(isSurreal("18 33 -2 19 1/8", "99 31 200/3") == false);
        System.out.println(isSurreal("-3", "-2 65") == true);
    }
}
