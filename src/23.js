// #### 23. `some()` and `every()` - Array Check

// * **Problem Statement:** Given an array of numbers `[2, 4, 6, 8]`:
//     * Use `some()` to check if *any* number is greater than 5.
//     * Use `every()` to check if *all* numbers are even.
// * **Concepts Quizzed:** `Array.prototype.some()`, `Array.prototype.every()`.
// * **Hints:** `some()` returns `true` if at least one element satisfies the condition. `every()` returns `true` only if all elements satisfy the condition.
// * **Difficulty:** Difficult

const numbers = [2, 4, 6, 8];

const someNumbers = numbers.some(num => num > 50);
const everyNumbers = numbers.every(num => num % 2 === 0);

console.log("numbers :", numbers);
console.log(`Some numbers greater than 50: ${someNumbers}`); // false
console.log(`All numbers are even: ${everyNumbers}`); // true


// op:
// numbers : [ 2, 4, 6, 8 ]
// Some numbers greater than 50: false
// All numbers are even: true