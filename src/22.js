//#### 22. `find()` - Find First User by ID

// Problem Statement:** Given an array of user objects `[{id: 1, name: "A"}, {id: 2, name: "B"}, {id: 3, name: "C"}]`,
//  use `find()` to get the user object with `id: 2`.
// Concepts Quizzed:** `Array.prototype.find()`, finding the first matching element.
// Hints:** The callback for `find()` should return `true` for the desired element.
// Difficulty:** Difficult


const users = [{id: 1, name: "A"}, {id: 2, name: "B"}, {id: 3, name: "C"}];

const user = users.find((user)=>user.id === 20);

console.log(user || "User not found");
