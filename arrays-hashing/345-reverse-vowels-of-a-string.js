// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/
// Pattern: two pointers converging from both ends

function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const arr = s.split('');
    let left = 0, right = arr.length - 1;

    while (left < right) {
        if (!vowels.has(arr[left])) {
            left++;
        } else if (!vowels.has(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
}

// Example:
// reverseVowels("IceCream") -> "AceCreIm"
console.log(reverseVowels("IceCream"));