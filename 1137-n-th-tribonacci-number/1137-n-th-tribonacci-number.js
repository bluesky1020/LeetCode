/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n < 2) {
    return n;
  }
  if (n === 2) {
    return 1;
  }
  let t0 = 0;
  let t1 = 1;
  let t2 = 1;
  let tn = 0;
  for(let i = 3; i <= n; i++) {
    tn = t0 + t1 + t2;
    t0 = t1;
    t1 = t2;
    t2 = tn;
  }
  return tn;
};