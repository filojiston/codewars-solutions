def insert_nth(head, index, data):
    if index == 0:
        new_node = Node(data)
        new_node.next = head
        return new_node
    else:
        head.next = insert_nth(head.next, index - 1, data)
        return head
