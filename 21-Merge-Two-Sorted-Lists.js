/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1) return list2;
    if (!list2) return list1;

    let mergedList = new ListNode();
    let head = mergedList;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            mergedList.next = list1;
            list1 = list1.next;
        } else {
            mergedList.next = list2;
            list2 = list2.next;
        }
        mergedList = mergedList.next;
    }

    if (list1) {
        mergedList.next = list1;
    } else {
        mergedList.next = list2;
    }

    return head.next;
};