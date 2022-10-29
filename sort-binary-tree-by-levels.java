import java.util.*;

class Kata {
    public static List<Integer> treeByLevels(Node node) {
        List<Integer> result = new ArrayList<>();
        Queue<Node> queue = new LinkedList<>();

        while (node != null) {
            result.add(node.value);
            if (node.left != null)
                queue.add(node.left);
            if (node.right != null)
                queue.add(node.right);
            node = queue.poll();
        }

        return result;
    }
}
