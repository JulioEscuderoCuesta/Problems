
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


/**
 * Given 2 arrays representing a reverse linked list with digits, sum them and return;
 * @param {Array} l1
 * @param {Array} l2
 * @return {Array}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1.length === 1 && l2.length === 1)
        return l1[0] + l2[0];
    else {

        if (l1.length < l2.length) {
            for (let i = l1.length; i = l2.length; i++) {
                l1.unshift(0);
            }
        } else if (l2.length <= l1.length) {
            for (let i = l2.length; i < l1.length; i++) {
                l2.unshift(0);
            }
        }

        let result = [];
        let sum = 0;
        for (let i = 0, j = l1.length, h = 0; i < l1.length; i++, j--, h++) {
            sum = l1[j - 1] + l2[j - 1];
            if (sum >= 10) {
                result[h + 1] = 1;
                if (isNaN(result[h])) {
                    result[h] = sum - 10;
                } else {
                    result[h] = result[h] + sum - 10;
                }
            } else {
                if (isNaN(result[h])) {
                    result[h] = sum;
                } else {
                    result[h] = result[h] + sum;
                    if (result[h] >= 10) {
                        result[h + 1] = 1;
                        result[h] = result[h] - 10;
                    }
                }
            }
            
        }
        return result;
    }
};

/**
 * Same thing but using the ListNode object
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers2 = function(l1, l2) {
    let firstHead = new ListNode(0);
    let current = firstHead;
    let carry = 0;

    let val1, val2, sum;
    // Keep going until l1 and l2 are null (no more nodes) and carry is 0 (no more carry)
    while(l1 != null || l2 != null || carry > 0) {
        // If one ListNode is smaller than the other, count it as 0
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;

        sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // the carry is the ten

        current.next = new ListNode(sum % 10); // get the unit
        current = current.next; // jump to the next node in the list

        // If there are no more nodes, l1 or l2 will be null next time
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }

    // Return result from first real node (to ease the loop)
    return firstHead.next;
}

function buildList(arr) {
    if (arr.length === 0) return;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

//console.log(addTwoNumbers([2], [2])); // Output = [0]
//console.log(addTwoNumbers([2, 3], [4, 5])); // Output = [8, 6]
//console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
//console.log(addTwoNumbers([9,9,9], [9]));
//console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));

let l1 = buildList([2, 4, 3]);
let l2 = buildList([5, 6, 4]);
let result = addTwoNumbers2(l1, l2);
console.log(result);