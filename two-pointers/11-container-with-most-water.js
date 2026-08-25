// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
// Pattern: two pointers converging - always move the pointer at the
// shorter line, since keeping it and moving the other can never help

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const shorterHeight = Math.min(height[left], height[right]);
        const area = width * shorterHeight;
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

// Example:
// maxArea([1,8,6,2,5,4,8,3,7]) -> 49
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));