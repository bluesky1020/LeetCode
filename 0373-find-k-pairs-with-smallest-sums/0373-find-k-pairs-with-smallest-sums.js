class minHeap {
  constructor() {
    this.heap = [];
  }

  getLength() {
    return this.heap.length;
  }

  push(val) {
    this.heap.push(val);
    let currIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currIndex - 1) / 2);
    while (parentIndex >= 0 && this.heap[parentIndex][0] > this.heap[currIndex][0]) {
      [this.heap[parentIndex], this.heap[currIndex]] = [this.heap[currIndex], this.heap[parentIndex]];
      currIndex = parentIndex;
      parentIndex = Math.floor((currIndex - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currIndex = 0;
    let leftChildIndex = 2*currIndex + 1;
    let rightChildIndex = 2*currIndex + 2;
    while (
      (leftChildIndex < this.heap.length && this.heap[leftChildIndex][0] < this.heap[currIndex][0]) ||
      (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] < this.heap[currIndex][0])
    ) {
      if (rightChildIndex >= this.heap.length || this.heap[leftChildIndex][0] < this.heap[rightChildIndex][0]) {
        [this.heap[leftChildIndex], this.heap[currIndex]] = [this.heap[currIndex], this.heap[leftChildIndex]];
        currIndex = leftChildIndex;
      } else {
        [this.heap[rightChildIndex], this.heap[currIndex]] = [this.heap[currIndex], this.heap[rightChildIndex]];
        currIndex = rightChildIndex;
      }
      leftChildIndex = 2*currIndex + 1;
      rightChildIndex = 2*currIndex + 2;
    }
    return top;
  }
}

function kSmallestPairs(nums1, nums2, k) {
  if (!nums1.length || !nums2.length) return [];
  const heap = new minHeap();
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    heap.push([nums1[i] + nums2[0], i, 0]);
  }
  const res = [];
  while (res.length < k && heap.getLength()) {
    const [sum, i, j] = heap.pop();
    res.push([nums1[i], nums2[j]]);
    if (j+1 < nums2.length) {
      heap.push([nums1[i] + nums2[j+1], i, j+1]);
    }
  }
  return res;
}
