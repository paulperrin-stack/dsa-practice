// 605. Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/
// Pattern: walk the array, check left/right neighbors at each position

function canPlaceFlowers(flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        const leftEmpty = i === 0 || flowerbed[i - 1] === 0;
        const rightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

        if (flowerbed[i] === 0 && leftEmpty && rightEmpty) {
            flowerbed[i] = 1;
            count++;
        }
    }

    return count >= n;
}

// Example:
// canPlaceFlower([1, 0, 0, 0, 1], 1) -> true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));