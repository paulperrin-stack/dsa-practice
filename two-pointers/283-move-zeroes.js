// 283. Move Zeros
// https://leetcode.com/problems/move-zeroes/
// Pattern: read/write pointers, same direction (like 443) -
// write only advances on non-zero values, then fill the rest with 0

function moveZeroes(nums) {
    let write = 0;

    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== 0) {
            nums[write] = nums[read];
            write++;
        }
    }

    for (let i = write; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// Example:
// nums = [0, 1, 0, 3, 12]
// moveZeroes(nums) ->  nums mutated to [1, 3, 12, 0, 0]
const test1 = [0, 1, 0, 3, 12]
moveZeroes(test1);
console.log(test1);