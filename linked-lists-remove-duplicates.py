def remove_duplicates(head):
    iter = head
    while iter:
        if iter.next and iter.data == iter.next.data:
            iter.next = iter.next.next
        else:
            iter = iter.next
    return head
