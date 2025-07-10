/*

**Problem Statement:** Write a function `fetchData(id)` that returns a Promise. This Promise should resolve after 2 seconds with an object `{ id: id, data: "Some data" }` if `id` is even, and reject with an error message "ID must be even" if `id` is odd.
**Concepts Quizzed:** `Promise` constructor, `resolve`, `reject`, `setTimeout`.
**Hints:** Use `new Promise((resolve, reject) => { ... })`. `setTimeout` to simulate async operation.
**Difficulty:** Difficult

*/

function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id % 2 === 0) {
        resolve({ id: id, data: "Some data" });
      } else reject(new Error("ID must be even"));
    }, 2000);
  });
}

fetchData(2)
  .then((msg) => console.log("Fetch Data:", msg))
  .catch((err) => console.log(err.message))
  .finally(() => console.log("callbacks completed..!"));
fetchData(3)
  .then((msg) => console.log("Fetch Data:", msg))
  .catch((err) => console.log(err.message))
  .finally(() => console.log("callbacks completed..!"));
