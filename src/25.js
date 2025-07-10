// #### 25. Promise.all() - Parallel API Calls

// * **Problem Statement:** Assume you have the `fetchData(id)` function from Challenge 15. Use `Promise.all()` to concurrently fetch data for `id`s 1, 2, and 3. Log all resolved data or log the first error if any promise rejects.
// * **Concepts Quizzed:** `Promise.all()`, handling multiple promises in parallel, `try...catch` for `Promise.all()`.
// * **Hints:** Pass an array of promises to `Promise.all()`. The result will be an array of resolved values if all succeed.
// * **Difficulty:** Difficult

async function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 1 || id > 3) {
        reject(`Error: Invalid ID ${id}`);
      } else {
        resolve(`Data for ID ${id}`);
      }
    }, 1000);
  });
}

// async function fetchAllData() {
//   try {
//     const results = await Promise.all([
//       fetchData(1),
//       fetchData(2),
//       fetchData(3),
//       fetchData(4),
//     ]);
//     console.log("All data fetched successfully:", results);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchAllData();

Promise.all([fetchData(1), fetchData(2), fetchData(3), fetchData(4)])
  .then((results) => {
    console.log("All data fetched successfully:", results);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
