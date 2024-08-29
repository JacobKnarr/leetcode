const { runTests } = require("./test/runners");

/**
 * Given an array of integers, representing prices for a given day,
 * determine the maximum profit that can be achieved.
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * 
 * @param {number[]} prices The prices of stock on a given day
 * @return {number} The max profit that can be achieved
 */
function maxProfit(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    
    while (right < prices.length) {
        // New max found, update profit
        if (prices[right] > prices[left]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left])
        
        // New min found, update buy price
        } else {
            left = right;
        }

        // Continue through prices
        right += 1;
    }
    
    return maxProfit;
};

const tests = [
    {
        params: {
            input: [0]
        },
        output: 0
    },
    {
        params: {
            input: [1,2]
        },
        output: 1
    },
    {
        params: {
            input: [2,1]
        },
        output: 0
    },
    {
        params: {
            input: [7,1,5,3,6,4]
        },
        output: 5
    },
    {
        params: {
            input: [7,6,4,3,1]
        },
        output: 0
    }
];

runTests(tests, maxProfit);