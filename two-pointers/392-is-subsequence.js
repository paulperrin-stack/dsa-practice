// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/
// Pattern: two pointers, same direction, different strings -
// i walks s (only advances on match), j walks t (always advances)

function isSubsequence(s, t) {
    let i = 0;
    let j = 0;

    while (j < t.length && i < s.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }

    return i === s.length;
};

// Example:
// isSubsequence("abc", "ahbgdc") -> true
console.log(isSubsequence("abc", "ahbgdc"));