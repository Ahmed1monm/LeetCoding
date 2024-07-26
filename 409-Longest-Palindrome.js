/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
         const counter = new Map();
    
    for (let char of s) {
        if (counter.has(char)) {
            counter.set(char, counter.get(char) + 1);
        } else {
            counter.set(char, 1);
        }
    }
    
    let result = 0;
    let hasOdd = false;
    for (let count of counter.values()) {
        if (count % 2 === 0) {
            result += count;
        } else {
            result += count - 1;
            hasOdd = true;
        }
    }
    
    return hasOdd ? result + 1 : result;
};