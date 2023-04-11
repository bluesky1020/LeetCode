/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */

var fullBloomFlowers = function(flowers, people) {
    let range = [];
    let vis = [];
    for(let i = 0; i < flowers.length; i++){
        let s = flowers[i][0].toString();
        let e = flowers[i][1].toString();
        if(vis[s] == undefined){
            vis[s] = 1 ;
            range.push(flowers[i][0]);
        }
        if(vis[e] == undefined){
            vis[e] = 1;
            range.push(flowers[i][1]);
        }
    }
    for(let i = 0; i < people.length; i++){
        let s = people[i].toString();
        if(vis[s] == undefined){
            vis[s] = 1 ;
            range.push(people[i]);
        }
    }
    range.sort((a,b)=>a-b);
    let alter = [];
    for(let i = 0 ; i < range.length; i ++){
        alter[range[i].toString()] = i;
    }
    let tree = [];
    tree[0] = {
        st:0,
        en:range.length-1,
        value:0
    }
    function buildTree(index){
        if(tree[index].st == tree[index].en) return ;
        let mid = Math.floor((tree[index].st + tree[index].en) / 2);
        let leftIndex = index*2+1;
        let rightIndex = index*2+2;
        tree[leftIndex] = {
            st: tree[index].st,
            en: mid,
            value:0
        }
        tree[rightIndex] = {
            st: mid+1,
            en: tree[index].en,
            value:0
        }
        buildTree(leftIndex);
        buildTree(rightIndex);
    }
    buildTree(0);
    function update(start, end, index){
        if(tree[index].st == start && tree[index].en == end){
            tree[index].value ++;
            return ;
        }
        let mid = Math.floor((tree[index].st + tree[index].en) / 2);
        let leftIndex = index*2+1;
        let rightIndex = index*2+2;
        if(tree[index].value){
            tree[leftIndex].value += tree[index].value;
            tree[rightIndex].value += tree[index].value;
            tree[index].value = 0;
        }
        if(start <= mid){
            update(start, Math.min(mid, end), leftIndex);
        }
        if(end > mid){
            update(Math.max(start,mid+1), end, rightIndex);
        }
    }
    function query(position, index){
        if(tree[index].st == tree[index].en)
            return tree[index].value;
        let leftIndex = index*2+1;
        let rightIndex = index*2+2;
        let mid = Math.floor((tree[index].st + tree[index].en) / 2);
        if(tree[index].value){
            tree[leftIndex].value += tree[index].value;
            tree[rightIndex].value += tree[index].value;
            tree[index].value = 0;
        }
        if(position <= mid)
            return query(position, leftIndex);
        else
            return query(position, rightIndex);
    }
    let result = [];
    for(let i = 0 ; i < flowers.length; i ++){
        let st = alter[flowers[i][0].toString()];
        let en = alter[flowers[i][1].toString()];
        update(st,en,0);
    }
    for(let i = 0 ; i < people.length; i ++){
        result.push(query(alter[people[i].toString()],0));
    }
    return result;
};