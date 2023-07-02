/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
  let m = requests.length, result = 0;
  for(let i = 1 ; i < (1<<m) ; i ++){
      let res = [], j, count = 0;
      for(j = 0 ; j < m ; j ++){
          if((1<<j)&i){
              let a = requests[j][0], b = requests[j][1];
              if(res[a] === undefined) res[a] = 0;
              if(res[b] === undefined) res[b] = 0;
              res[a] --;
              res[b] ++;
              count ++;
          }
      }
      for(j = 0 ; j < n ; j ++){
          if(res[j]) break;
      }
      if(j === n && result < count)
          result = count;
  }
    return result;
};