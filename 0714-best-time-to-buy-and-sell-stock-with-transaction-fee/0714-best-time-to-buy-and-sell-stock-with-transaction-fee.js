/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let n = prices.length;
    let buy = new Array(n).fill(0);
    let sell = new Array(n).fill(0);

    buy[0] = -prices[0];

    for (let i = 1; i < n; i++) {
        buy[i] = Math.max(buy[i-1], sell[i-1] - prices[i]);
        sell[i] = Math.max(sell[i-1], buy[i-1] + prices[i] - fee);
    }

    return sell[n-1];
};