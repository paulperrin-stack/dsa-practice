// 1207. Unique Number of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences/
// Pattern: hashing, two passes - build a frequency Map (value -> count)
// then check the counts themselves are all unique via a Set size comparison

function uniqueOccurrences(arr) {
    const freqMap = new Map();

    for (const n of arr) {
        freqMap.set(n, (freqMap.get(n) || 0) + 1);
    }
    
    const counts = [...freqMap.values()];
    const uniqueCounts = new Set(counts);

    return counts.length === uniqueCounts.size;
}

// Example:
// uniqueOccurrences([1, 2, 2, 1, 1, 3]) -> true
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));