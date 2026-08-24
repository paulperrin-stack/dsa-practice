/// 334. Increasing Triplet Subsequence
// https://leetcode.com/problems/increasing-triplet-subsequence/
// Pattern: greedy tracking of two smallest "candidates" seen so far, O(n) time / O(1) space

function increasingTriplet(nums) {
    let first = Infinity;
    let second = Infinity;

    for (const num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }

    return true;
};

// Example:
// increasingTriplet([2, 1, 5, 0, 4, 6]) -> true
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));