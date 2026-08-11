// 1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/
// Pattern: walk two strings with one counter, one char from each per loop

function mergeAlternately(word1, word2) {
    let result = "";
    let i = 0;

    // || not && - keep looping while EITHER string still has chars left,
    // so the longer string's leftover get appended once the other runs out
    while (i < word1.length || i < word2.length) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
        i++; // gotcha: forgot this once -> infinite loop
    }

    return result;
}

// Example:
// mergeAlternately("ab", "xy") -> "axby"
console.log(mergeAlternately("ab", "xy"));