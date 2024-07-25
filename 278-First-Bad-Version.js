/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n ===1) return n

        let start = 1
        let end = n
        let firstBadVersion = n;

        while (start<=end){
            const mid = Math.floor((start + end)/2);

            if (isBadVersion(mid)) {
                firstBadVersion = mid;
                end = mid -1;
            }

            if (!isBadVersion(mid)){
                start = mid +1
            }

        }
        return firstBadVersion
    };
};