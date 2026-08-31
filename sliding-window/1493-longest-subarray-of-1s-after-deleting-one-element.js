// 1493. Longest Subarray of 1's After Deleting One Element
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
// Pattern: same variable-size sliding window as 1004, with k=1 -
// find longest window with at most 1 zero, then subtract 1 for the
// forced deletion (unconditional, even if the window had zero zeroes)

function longestSubarray(nums) {
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength - 1;
};

// Example:
// longestSubarray([0,1,1,1,0,1,1,0,1]) -> 5
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));