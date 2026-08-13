// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/
// Pattern: split / reverse / join (trim + regex split handles extra space)

function reverseWords(s) {
    return s
        .trim()
        .split(/\s+/)
        .reverse()
        .join(' ')
};

// Example:
// reverseWords("a good example") -> "example good a"
console.log(reverseWords("a good example"));

// -- Follow-up: O(1) extra space version --
// Reverse the whole char array, then reverse each word back in place.
// Not actually O(1) in JS
// but this is the in-place two-pointer technique the follow-up is testing
function reverseWordsInPlace(s) {
    const arr = s.split('');
    reverseRange(arr, 0, arr.length - 1);

    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === ' ') { i++; continue; }
        let wordStart = i;
        while (i < arr.length && arr[i] !== ' ') i++;
        reverseRange(arr, wordStart, i - 1);
        result.push(arr.slice(wordStart, i).join(''));
    }
    return result.join(' ');
}

function reverseRange(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}