# class Node:
#     def __init__(self, data, child_nodes=[]):
#         self.data = data
#         self.child_nodes = child_nodes
#
# def tree_to_list(tree_root):
#     unsorted = get_list(tree_root)
#     unsorted = [int(x) for x in unsorted]
#     unsorted.sort()
#     return unsorted
#
#
# def get_list(tree_root):
#     if tree_root is None:
#         return
#
#     result = str(tree_root.data)
#
#     for node in tree_root.child_nodes:
#         result += get_list(node)
#
#     return result
#
#

# good solution, mine doesn't work...
class Node:
    def __init__(self, data, child_nodes=None):
        self.data = data
        self.child_nodes = child_nodes

def tree_to_list(tree_root):
    values = [tree_root.data]
    targets = tree_root.child_nodes

    while targets:
        target = targets.pop(0)
        values.append(target.data)
        if target.child_nodes:
            targets += target.child_nodes

    return values


print(tree_to_list(Node(1, [Node(2, [Node(4), Node(5)]), Node(3, [Node(7)])])),
[1, 2, 3, 4, 5, 7])
