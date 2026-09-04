// 2390. Removing Stars From a String
// https://leetcode.com/problems/removing-stars-from-a-string/
// Pattern: stack - push regular characters, pop on '*' (removes the
// closest character to the left), don't push the star itself

function removeStars(s) {
    const stack = [];

    for (const char of s) {
        if (char === '*') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};

// Example:
// removeStars("leet**cod*e") -> "lecoe"
console.log(removeStars("leet**cod*e"));