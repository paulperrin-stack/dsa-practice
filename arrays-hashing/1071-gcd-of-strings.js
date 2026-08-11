// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/
// Pattern: if str1 + str2 === str2 + str1, a common "divisor" string exists -
// its length is gcd(str1.length, str2.length)

function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    const gcdLength = gcd(str1.length, str2.length);
    return str1.slice(0, gcdLength);
}

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }

    return a;
}

// Example:
// gcdOfStrings("ABCABC", "ABC") -> "ABC"
console.log(gcdOfStrings("ABCABC", "ABC"));