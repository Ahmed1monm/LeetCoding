/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    var node = head;
    var previous = null;

    while (node) {
        var save = node.next;

        node.next = previous;

        previous = node;

        node = save;
    }
    return previous;
};