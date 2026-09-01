// 1732. Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/
// Pattern: prefix sum - running total of gains gives the altitude at
// each point, track the max altitude seen along the away

function largestAltitude(gain) {
    let altitude = 0;
    let maxAltitude = 0;

    for (const g of gain) {
        altitude += g;
        maxAltitude = Math.max(maxAltitude, altitude);
    }

    return maxAltitude;
};

// Example:
// largestAltitude([-5, 1, 5, 0, -7]) -> 1
console.log(largestAltitude([-5, 1, 5, 0, -7]));