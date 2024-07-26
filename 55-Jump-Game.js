/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let lastIndex = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        // console.log(nums[i-1])
        if (nums[i] >= lastIndex - i) { lastIndex = i }
    }

    return lastIndex === 0;
};