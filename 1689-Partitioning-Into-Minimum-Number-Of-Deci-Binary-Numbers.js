/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let largestDegit = 0;
    for(let i=0; i<n.length; i++){
        if(Number(n[i]) > largestDegit) largestDegit = Number(n[i]);
    }
    return largestDegit
};