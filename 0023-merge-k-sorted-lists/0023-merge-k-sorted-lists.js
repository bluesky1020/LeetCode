/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(value) {
            this.heap.push(value);
            this.bubbleUp(this.heap.length - 1);
        }

        pop() {
            const min = this.heap[0];
            const end = this.heap.pop();

            if (this.heap.length > 0) {
                this.heap[0] = end;
                this.bubbleDown(0);
            }

            return min;
        }

        bubbleUp(index) {
            const node = this.heap[index];

            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                const parent = this.heap[parentIndex];

                if (node.val >= parent.val) {
                    break;
                }

                this.heap[parentIndex] = node;
                this.heap[index] = parent;
                index = parentIndex;
            }
        }

        bubbleDown(index) {
            const node = this.heap[index];
            const length = this.heap.length;

            while (true) {
                let leftChildIndex = 2 * index + 1;
                let rightChildIndex = 2 * index + 2;
                let leftChild, rightChild;
                let swap = null;

                if (leftChildIndex < length) {
                    leftChild = this.heap[leftChildIndex];
                    if (leftChild.val < node.val) {
                        swap = leftChildIndex;
                    }
                }

                if (rightChildIndex < length) {
                    rightChild = this.heap[rightChildIndex];
                    if ((swap === null && rightChild.val < node.val) ||
                        (swap !== null && rightChild.val < leftChild.val)) {
                        swap = rightChildIndex;
                    }
                }

                if (swap === null) {
                    break;
                }

                this.heap[index] = this.heap[swap];
                this.heap[swap] = node;
                index = swap;
            }
        }
    }

    const result = new ListNode();
    const minHeap = new MinHeap();

    for (const list of lists) {
        if (list) {
            minHeap.push(list);
        }
    }

    let curr = result;

    while (minHeap.heap.length > 0) {
        const node = minHeap.pop();
        curr.next = node;
        curr = curr.next;

        if (node.next) {
            minHeap.push(node.next);
        }
    }

    return result.next;
};