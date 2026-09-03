// 1657. Determine if Two Strings Are Close
// https://leetcode.com/problems/determine-if-two-strings-are-close/
// Pattern; hashing - build frequency maps for both strings, then compare
// structure : same set of distinct charachers + same sorted multiset of counts
// (position and letter identity doesn't matter, only which chars exist and
// the pattern of how many times each appears)

function closeStrings(word1, word2) {
    if (word1.length !== word2.length) return false;

    const freqMap1 = new Map();
    const freqMap2 = new Map();

    for (const c of word1) {
        freqMap1.set(c, (freqMap1.get(c) || 0) + 1);
    }

    for (const c of word2) {
        freqMap2.set(c, (freqMap2.get(c) || 0) + 1);
    }

    const keys1 = [...freqMap1.keys()].sort();
    const keys2 = [...freqMap2.keys()].sort();

    if (keys1.join('') !== keys2.join('')) return false;

    const counts1 = [...freqMap1.values()].sort((a, b) => a - b);
    const counts2 = [...freqMap2.values()].sort((a, b) => a - b);

    return counts1.join('') === counts2.join('');
}

// Example:
// closeStrings("cabbba", "abbccc") -> true
console.log(closeStrings("cabbba", "abbccc"));