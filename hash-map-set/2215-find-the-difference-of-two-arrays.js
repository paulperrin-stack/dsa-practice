// 2215. Find the Difference of Two Arrays
// https://leetcode.com/problems/find-the-difference-of-two-arrays/
// Pattern: Sets - convert both arrays to Sets (dedupes automatically,
// gives 0(1) .has lookups), then filter for set difference both ways

function findDifference(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const onlyInNums1 = [...set1].filter(n => !set2.has(n));
    const onlyInNums2 = [...set2].filter(n => !set1.has(n));

    return [onlyInNums1, onlyInNums2];
};

// Example:
// findDifference([1, 2, 3, 3], [1, 1, 2, 2]) -> [[3], []]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));