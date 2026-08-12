// 1431. Kids with the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
// Pattern: find max, then check each elements against it

function kidsWithCandies(candies, extraCandies) {
    const max = Math.max(...candies);

    return candies.map(candy => candy + extraCandies >= max);
}

// Example:
// kidsWithCandies([2, 3, 5, 1, 3], 3) -> [true, true, true, false, true]
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));