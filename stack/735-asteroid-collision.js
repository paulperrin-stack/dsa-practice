// 735. Asteroid Collision
// https://leetcode.com/problems/asteroid-collision/
// Pattern: stack - stack holds surviving right-moving asteroids;
// an incoming left-mover collides against the stack top in a while
// loop (can destroy multiple survivors in a row), smaller size loses,
// equal sizes both explode

function asteroidCollision(asteroids) {
    const stack = [];

    for (const asteroid of asteroids) {
        let destroyed = false;

        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];

            if (Math.abs(asteroid) > top) {
                stack.pop();
            } else if (Math.abs(asteroid) === top) {
                stack.pop();
                destroyed = true;
                break;
            } else {
                destroyed = true;
                break;
            }
        }

        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
};

// Example:
// asteroidCollision([3, 5, -6, 2, -1, 4]) -> [-6, 2, 4]
console.log(asteroidCollision([3, 5, -6, 2, -1, 4]));