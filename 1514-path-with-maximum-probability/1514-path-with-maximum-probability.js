/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */

class PQueue {
        constructor() {
            this.heap = [];
        }
        getLeftChildIndex(parentIndex) {
            return 2 * parentIndex + 1;
        }
        getRightChildIndex(parentIndex) {
            return 2 * parentIndex + 2;
        }
        getParentIndex(childIndex) {
            return Math.floor((childIndex - 1) / 2);
        }
        hasLeftChild(index) {
            return this.getLeftChildIndex(index) < this.heap.length;
        }
        hasRightChild(index) {
            return this.getRightChildIndex(index) < this.heap.length;
        }
        hasParent(index) {
            return this.getParentIndex(index) >= 0;
        }
        leftChild(index) {
            return this.heap[this.getLeftChildIndex(index)];
        }
        rightChild(index) {
            return this.heap[this.getRightChildIndex(index)];
        }
        parent(index) {
            return this.heap[this.getParentIndex(index)];
        }
        swap(indexOne, indexTwo) {
            const temp = this.heap[indexOne];
            this.heap[indexOne] = this.heap[indexTwo];
            this.heap[indexTwo] = temp;
        }
        peek() {
            if (this.heap.length === 0) {
                return null;
            }
            return this.heap[0];
        }
        remove() {
            if (this.heap.length === 0) {
                return null;
            }
            const item = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this.heapifyDown();
            return item;
        }
        add(item) {
            this.heap.push(item);
            this.heapifyUp();
        }
        heapifyUp() {
            let index = this.heap.length - 1;
            while (this.hasParent(index) && this.parent(index).value < this.heap[index].value) {
                this.swap(this.getParentIndex(index), index);
                index = this.getParentIndex(index);
            }
        }
        heapifyDown() {
            let index = 0;
            while (this.hasLeftChild(index)) {
                let smallerChildIndex = this.getLeftChildIndex(index);
                if (this.hasRightChild(index) && this.rightChild(index).value > this.leftChild(index).value) {
                    smallerChildIndex = this.getRightChildIndex(index);
                }
                if (this.heap[index].value > this.heap[smallerChildIndex].value) {
                    break;
                } else {
                    this.swap(index, smallerChildIndex);
                }
                index = smallerChildIndex;
            }
        }
    }

var maxProbability = function(n, edges, succProb, start, end) {
    let con = [], cnt = [];
    for(let i = 0 ; i < n ; i ++) {
        con[i] = [];
        cnt[i] = 0;
    }
    for(let i = 0 ; i < edges.length ; i ++){
        let a = edges[i][0], b = edges[i][1];
        con[a][cnt[a]++] = {node:b, cost: succProb[i]};
        con[b][cnt[b]++] = {node:a, cost: succProb[i]};   
    }
    let qu = new PQueue();
    qu.add({node: start, value: 1})
    let vis = [];
    while(1){
        let v = qu.remove();
        if(v === null) break;
        if(v.node === end) return v.value.toFixed(5);
        if(vis[v.node]) continue ;
        vis[v.node] = 1;
        for(let i = 0 ; i < cnt[v.node] ; i ++){
            qu.add({node: con[v.node][i].node, value: v.value*con[v.node][i].cost});
        }
    }
    return 0.00000;
};