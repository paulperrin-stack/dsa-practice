// 1004. Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii/
// Pattern: variable-size sliding window - expand right always,
// shrink from left only while zeroCount exceeds k

function longestOnes(nums, k) {
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength;
};

// Example:
// longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2) -> 6
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));