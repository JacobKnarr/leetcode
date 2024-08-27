const { runTests } = require("./test/runners");

/**
 * @param {number[]} prices The prices of stock on a given day
 * @return {number} The day when max profit can be achieved
 */
function maxProfit(prices) {
    // let buy = prices[0];
    // let profit = 0;

    // for (let i = 1; i < prices.length; i++) {
    //     // Update buy if lower
    //     buy = Math.min(buy, prices[i]);

    //     // Update profit if greater
    //     profit = Math.max(profit, prices[i] - buy);
    // }

    // return profit;


    // Sliding window

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