// 443. String Compression
// https://leetcode.com/problems/string-compression/
// Pattern: two pointers moving same direction at different speeds
// (read scans ahead to find group boundaries, write places compressed output)

var compress = function(chars) {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        const currentChar = chars[read];
        let groupLength = 0;

        while (read < chars.length && chars[read] === currentChar) {
            read++;
            groupLength++;
        }

        chars[write] = currentChar;
        write++;

        if (groupLength > 1) {
            const countStr = groupLength.toString();
            for (const digit of countStr) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write;
};

// Example:
// chars = ["a","a","b","b","c","c","c"]
// compress(chars) -> 6, chars mutated to ["a","2","b","2","c","3",...]
const test1 = ["a","a","b","b","c","c","c"];
console.log(compress(test1), test1);