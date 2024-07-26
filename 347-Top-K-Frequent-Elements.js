/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let counter = new Map();
    const result = []

    for (num of nums) {
        if (counter.has(num)) {
            counter.set(num, counter.get(num) + 1)
        } else {
            counter.set(num, 1)
        }
    }
    let sortedByValue = [...counter.entries()].sort((a, b) => b[1] - a[1]);
    console.log(sortedByValue)

    for (let i = 0; i < k; i++) {
        result.push(sortedByValue[i][0])
    }
    return result
};