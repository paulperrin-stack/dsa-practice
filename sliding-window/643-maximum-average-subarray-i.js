// 643. Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/
// Pattern: sliding window (fixed size k) - slide by subtracting the
// element leaving and adding the element entering, avoids re-summing

function findMaxAverage(nums, k) {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k;
};

// Example:
// findMaxAverage([1, 12, -5, -6, 50, 3], 4) -> 12.75
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));