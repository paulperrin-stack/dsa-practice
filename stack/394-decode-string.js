// 394. Decode String
// https://leetcode.com/problems/decode-string/
// Pattern: stack — nesting signals a stack is needed. On '[', push
// the current string + repeat count and start fresh for the nested
// level. On ']', pop back and append currentString repeated num times.

var decodeString = function(s) {
    const stack = [];
    let currentString = '';
    let currentNum = 0;

    for (const char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            stack.push([currentString, currentNum]);
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            const [previousString, num] = stack.pop();
            currentString = previousString + currentString.repeat(num);
        } else {
            currentString += char;
        }
    }

    return currentString;
};

// Example:
// decodeString("3[a2[c]]") -> "accaccacc"
console.log(decodeString("3[a2[c]]"));