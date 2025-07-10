
// #### 20. Modules - Default Export and Named Import

// * **Problem Statement:** Create a file `utils.js` that exports a single utility function `capitalize(str)` as a default export. In `app.js`, import this function and use it to capitalize a string.
// * **Concepts Quizzed:** `export default`, importing a default export.
// * **Hints:** In `utils.js`: `export default function capitalize(...)`. In `app.js`: `import capitalize from './utils.js';`.
// * **Difficulty:** Difficult

import capitalize from './utils.js';

console.log(capitalize('hello world')); // Expected output: 'HELLO WORLD'