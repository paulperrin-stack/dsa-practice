// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
// Pattern: prefix products + suffix products, combined (no division)

function productExceptSelf(nums) {
    const n = nums.length;
    const prefix = new Array(n);
    const suffix = new Array(n);
    const answer = new Array(n);

    prefix[0] = 1;
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    suffix[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }

    return answer;
}

// Example:
// productExceptSelf([1, 2, 3, 4]) -> [24, 12, 8, 6]
console.log(productExceptSelf([1, 2, 3, 4]));