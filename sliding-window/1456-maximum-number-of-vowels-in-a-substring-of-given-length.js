// 1456. Maximum Number of Vowels in a Substring of Given Length
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
// Pattern: fixed-size sliding window (same as 643) - track a vowel
// count instead of a sum, adjust by 1 as chars leave/enter the window

function maxVowels(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    let windowCount = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            windowCount++;
        }
    }

    let maxCount = windowCount;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i - k])) {
            windowCount--;
        }
        if (vowels.has(s[i])) {
            windowCount++;
        }
        maxCount = Math.max(maxCount, windowCount);
    }

    return maxCount;
};

// Example:
// maxVowels("leetcode", 3) -> 2
console.log(maxVowels("leetcode", 3));