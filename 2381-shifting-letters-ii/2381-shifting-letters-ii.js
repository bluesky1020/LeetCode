/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    s = s.split('');
    let len = s.length;
    let tree = [];
    tree[0] = {
        st: 0,
        en: len - 1,
        value: 0
    }
    function buildTree(index) {
        if (tree[index].st == tree[index].en) return;
        let mid = Math.floor((tree[index].st + tree[index].en) / 2);
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        tree[leftIndex] = {
            st: tree[index].st,
            en: mid,
            value: 0
        }
        tree[rightIndex] = {
            st: mid + 1,
            en: tree[index].en,
            value: 0
        }
        buildTree(leftIndex);
        buildTree(rightIndex);
    }
    buildTree(0);
    function update(start, end, index, value) {
        if (tree[index].st == start && tree[index].en == end) {
            tree[index].value = (tree[index].value + value + 26) % 26;
            return;
        }
        let mid = Math.floor((tree[index].st + tree[index].en) / 2);
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        if (tree[index].value != 0) {
            tree[leftIndex].value = (tree[leftIndex].value + tree[index].value + 26) % 26;
            tree[rightIndex].value = (tree[rightIndex].value + tree[index].value + 26) % 26;
            tree[index].value = 0;
        }
        if (start <= mid) {
            update(start, Math.min(mid, end), leftIndex, value);
        }
        if (end > mid) {
            update(Math.max(start, mid + 1), end, rightIndex, value);
        }
    }
    for (let i = 0; i < shifts.length; i++) {
        update(shifts[i][0], shifts[i][1], 0, shifts[i][2] == 0 ? -1 : 1);
    }
    function pushTree(index) {
        if (tree[index].st == tree[index].en) {
            let id = tree[index].st;
            s[id] = String.fromCharCode((s[id].charCodeAt(0) - 97 + tree[index].value) % 26 + 97);
            return;
        }
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        if (tree[index].val != 0) {
            tree[leftIndex].value = (tree[leftIndex].value + tree[index].value + 26) % 26;
            tree[rightIndex].value = (tree[rightIndex].value + tree[index].value + 26) % 26;
            tree[index].value = 0;
        }
        pushTree(leftIndex);
        pushTree(rightIndex);
    }
    pushTree(0);
    return s.join('');
};