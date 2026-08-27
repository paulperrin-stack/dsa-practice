// 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs/
// Pattern: two pointers converging on a sorted array (two-sum style) -
// sum too small -> move left up, sum too large -> move right down

function maxOperations(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let count = 0;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === k) {
            count++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return count;
};

// Example:
// maxOperations([3, 1, 3, 4, 3], 6) -> 1
console.log(maxOperations([3, 1, 3, 4, 3], 6));