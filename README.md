## 30 ES6+ Coding Challenges

---

### **Easy Challenges**

#### 1. Arrow Functions - Basic Sum

* **Problem Statement:** Write an arrow function `sum(a, b)` that takes two numbers and returns their sum.
* **Concepts Quizzed:** Basic arrow function syntax, returning a value implicitly (if single expression).
* **Hints:** Use the `=>` syntax. For a single expression, the `return` keyword can often be omitted.
* **Difficulty:** Easy

#### 2. Template Literals - Greeting Message

* **Problem Statement:** Create a function `greet(name)` that takes a string `name` and returns a greeting message like "Hello, [name]! Welcome." using template literals.
* **Concepts Quizzed:** Template literal syntax, embedding variables.
* **Hints:** Use backticks `` ` `` and `${}` for interpolation.
* **Difficulty:** Easy

#### 3. Destructuring Arrays - First Two Elements

* **Problem Statement:** Given an array `[10, 20, 30, 40]`, use array destructuring to extract the first two elements into variables `first` and `second`.
* **Concepts Quizzed:** Array destructuring syntax.
* **Hints:** Use square brackets `[]` on the left-hand side of the assignment.
* **Difficulty:** Easy

#### 4. Destructuring Objects - User Name and Age

* **Problem Statement:** Given an object `{ name: "Alice", age: 30, city: "New York" }`, use object destructuring to extract `name` and `age` into variables.
* **Concepts Quizzed:** Object destructuring syntax.
* **Hints:** Use curly braces `{}` on the left-hand side. Variable names must match object property names.
* **Difficulty:** Easy

#### 5. Spread Operator - Concatenate Arrays

* **Problem Statement:** Combine two arrays `[1, 2, 3]` and `[4, 5, 6]` into a single new array `[1, 2, 3, 4, 5, 6]` using the spread operator.
* **Concepts Quizzed:** Spread operator for array concatenation, immutability.
* **Hints:** Prepend `...` to each array when creating the new array.
* **Difficulty:** Easy

#### 6. Default Parameters - Simple Power Function

* **Problem Statement:** Create a function `power(base, exponent)` that returns `base` raised to the `exponent`. If `exponent` is not provided, it should default to `2`.
* **Concepts Quizzed:** Default parameters in function definitions.
* **Hints:** Assign the default value directly in the function parameter list.
* **Difficulty:** Easy

#### 7. `map()` - Double Numbers

* **Problem Statement:** Given an array of numbers `[1, 2, 3, 4]`, use the `map()` method to return a new array where each number is doubled.
* **Concepts Quizzed:** `Array.prototype.map()`, arrow functions for callbacks.
* **Hints:** `map()` returns a new array. The callback function should return the transformed element.
* **Difficulty:** Easy

#### 8. `filter()` - Even Numbers

* **Problem Statement:** Given an array of numbers `[1, 2, 3, 4, 5, 6]`, use the `filter()` method to return a new array containing only the even numbers.
* **Concepts Quizzed:** `Array.prototype.filter()`, arrow functions for callbacks.
* **Hints:** The callback function for `filter()` should return `true` for elements to be included.
* **Difficulty:** Easy

#### 9. Classes - Basic Dog Class

* **Problem Statement:** Define a simple `Dog` class with a constructor that takes `name` and `breed` as arguments and sets them as properties. Add a method `bark()` that returns `${this.name} says Woof!`.
* **Concepts Quizzed:** `class` keyword, `constructor`, `this` keyword, method definition.
* **Hints:** Use `constructor(name, breed)` and `this.name = name;`.
* **Difficulty:** Easy

#### 10. Modules - Simple Export/Import

* **Problem Statement:** Create two files: `math.js` which exports a function `add(a, b)`, and `app.js` which imports `add` and uses it to calculate `add(5, 3)`. (Assume a Node.js or browser environment with module support).
* **Concepts Quizzed:** `export` (named export), `import` (named import).
* **Hints:** In `math.js`: `export function add(a, b) { ... }`. In `app.js`: `import { add } from './math.js';`.
* **Difficulty:** Easy

---

### **Difficult Challenges**

#### 11. Rest Parameters - Sum All Arguments

* **Problem Statement:** Write a function `sumAll(...numbers)` that takes an arbitrary number of arguments and returns their sum.
* **Concepts Quizzed:** Rest parameters, `Array.prototype.reduce()`.
* **Hints:** The `...numbers` syntax will collect all arguments into an array. You can then use `reduce()` on this array.
* **Difficulty:** Difficult (due to `reduce()` usage if new)

#### 12. Object Destructuring with Renaming and Defaults

* **Problem Statement:** Given an object `{ id: 1, firstName: "John", email: "john@example.com" }`, destructure it to get `userId` (renamed from `id`), `fullName` (a default value "Guest" if `firstName` is missing), and `email`.
* **Concepts Quizzed:** Object destructuring with renaming, default values in destructuring.
* **Hints:** Use `propertyName: newName` for renaming and `propertyName = defaultValue` for defaults.
* **Difficulty:** Difficult

#### 13. Nested Destructuring - User Address

* **Problem Statement:** Given an object `{ user: { name: "Jane", address: { street: "Main St", city: "Anytown" } } }`, destructure it to extract `name`, `street`, and `city` into separate variables.
* **Concepts Quizzed:** Nested object destructuring.
* **Hints:** You'll need to nest `{}` within `{}` during destructuring.
* **Difficulty:** Difficult

#### 14. Spread Operator - Deep Clone (Shallow)

* **Problem Statement:** Create a *shallow* copy of an object `{ a: 1, b: { c: 2 } }` using the spread operator. Modify the `a` property of the copied object and verify that the original object remains unchanged. Then, modify `c` in the copied object's nested `b` and observe what happens to the original.
* **Concepts Quizzed:** Spread operator for object copying, understanding shallow vs. deep copies.
* **Hints:** `const newObj = { ...originalObj };`. The key is to explain *why* the nested object is still linked.
* **Difficulty:** Difficult (conceptually)

#### 15. Promises - Simulate API Call

* **Problem Statement:** Write a function `fetchData(id)` that returns a Promise. This Promise should resolve after 2 seconds with an object `{ id: id, data: "Some data" }` if `id` is even, and reject with an error message "ID must be even" if `id` is odd.
* **Concepts Quizzed:** `Promise` constructor, `resolve`, `reject`, `setTimeout`.
* **Hints:** Use `new Promise((resolve, reject) => { ... })`. `setTimeout` to simulate async operation.
* **Difficulty:** Difficult

#### 16. Async/Await - Fetch and Handle Error

* **Problem Statement:** Using `async/await` and the `fetchData` function from the previous challenge, write an `async` function `getData(id)` that calls `fetchData(id)`. It should log the data if successful and catch and log the error message if the Promise rejects.
* **Concepts Quizzed:** `async` and `await` keywords, `try...catch` block with promises.
* **Hints:** Wrap the `await` call in a `try...catch` block.
* **Difficulty:** Difficult

#### 17. `reduce()` - Calculate Total Price

* **Problem Statement:** Given an array of objects `[{ item: "A", price: 10 }, { item: "B", price: 20 }, { item: "C", price: 30 }]`, use `reduce()` to calculate the total price of all items.
* **Concepts Quizzed:** `Array.prototype.reduce()`, accumulator, initial value.
* **Hints:** The `reduce()` callback takes an `accumulator` and `currentValue`. Remember to provide an initial value for the accumulator.
* **Difficulty:** Difficult

#### 18. `reduce()` - Group by Property

* **Problem Statement:** Given an array of objects `[{ type: "fruit", name: "apple" }, { type: "vegetable", name: "carrot" }, { type: "fruit", name: "banana" }]`, use `reduce()` to group them by their `type` into an object like `{ fruit: [ {name: "apple"}, {name: "banana"} ], vegetable: [ {name: "carrot"} ] }`.
* **Concepts Quizzed:** `Array.prototype.reduce()`, dynamic object keys, checking for existing properties.
* **Hints:** The accumulator will be an object. Check if the `type` key already exists on the accumulator before pushing.
* **Difficulty:** Difficult

#### 19. Classes - Inheritance (Animal Kingdom)

* **Problem Statement:** Create a base class `Animal` with a constructor that takes `name` and a `makeSound()` method. Then, create a `Dog` class that extends `Animal` and overrides `makeSound()` to return "Woof!". Also, add a `breed` property to `Dog`.
* **Concepts Quizzed:** `class` inheritance, `extends` keyword, `super()` in constructor, method overriding.
* **Hints:** Use `super(name)` in the `Dog` constructor to call the parent constructor.
* **Difficulty:** Difficult

#### 20. Modules - Default Export and Named Import

* **Problem Statement:** Create a file `utils.js` that exports a single utility function `capitalize(str)` as a default export. In `app.js`, import this function and use it to capitalize a string.
* **Concepts Quizzed:** `export default`, importing a default export.
* **Hints:** In `utils.js`: `export default function capitalize(...)`. In `app.js`: `import capitalize from './utils.js';`.
* **Difficulty:** Difficult

#### 21. Ternary Operator - Conditional Rendering Logic

* **Problem Statement:** Write a function `displayStatus(isLoggedIn)` that returns "Welcome back!" if `isLoggedIn` is true, and "Please log in." otherwise, using the ternary operator.
* **Concepts Quizzed:** Ternary operator, concise conditional logic.
* **Hints:** `condition ? valueIfTrue : valueIfFalse`.
* **Difficulty:** Difficult (if not used to it)

#### 22. `find()` - Find First User by ID

* **Problem Statement:** Given an array of user objects `[{id: 1, name: "A"}, {id: 2, name: "B"}, {id: 3, name: "C"}]`, use `find()` to get the user object with `id: 2`.
* **Concepts Quizzed:** `Array.prototype.find()`, finding the first matching element.
* **Hints:** The callback for `find()` should return `true` for the desired element.
* **Difficulty:** Difficult

#### 23. `some()` and `every()` - Array Check

* **Problem Statement:** Given an array of numbers `[2, 4, 6, 8]`:
    * Use `some()` to check if *any* number is greater than 5.
    * Use `every()` to check if *all* numbers are even.
* **Concepts Quizzed:** `Array.prototype.some()`, `Array.prototype.every()`.
* **Hints:** `some()` returns `true` if at least one element satisfies the condition. `every()` returns `true` only if all elements satisfy the condition.
* **Difficulty:** Difficult

#### 24. Classes - Getters and Setters

* **Problem Statement:** Create a `Rectangle` class with a constructor taking `width` and `height`. Add a getter `area` that calculates and returns the area, and a setter `dimensions` that takes an object `{ width, height }` and updates both properties.
* **Concepts Quizzed:** `get` and `set` keywords in classes.
* **Hints:** `get area() { ... }`, `set dimensions({ width, height }) { ... }`.
* **Difficulty:** Difficult

#### 25. Promise.all() - Parallel API Calls

* **Problem Statement:** Assume you have the `fetchData(id)` function from Challenge 15. Use `Promise.all()` to concurrently fetch data for `id`s 1, 2, and 3. Log all resolved data or log the first error if any promise rejects.
* **Concepts Quizzed:** `Promise.all()`, handling multiple promises in parallel, `try...catch` for `Promise.all()`.
* **Hints:** Pass an array of promises to `Promise.all()`. The result will be an array of resolved values if all succeed.
* **Difficulty:** Difficult

#### 26. Promise.race() - Fastest API Call

* **Problem Statement:** Assume you have the `fetchData(id)` function from Challenge 15. Use `Promise.race()` to get the result of the fastest promise among `fetchData(1)`, `fetchData(2)`, and `fetchData(3)`. Log the first resolved value or the first rejected error.
* **Concepts Quizzed:** `Promise.race()`, handling the first settled promise.
* **Hints:** `Promise.race()` returns a promise that settles as soon as one of the input promises settles (either resolves or rejects).
* **Difficulty:** Difficult

#### 27. Generator Functions - Simple Sequence

* **Problem Statement:** Write a generator function `idGenerator()` that yields sequential IDs starting from 1 (1, 2, 3, ...).
* **Concepts Quizzed:** `function*` syntax, `yield` keyword, iterators.
* **Hints:** Use a `while(true)` loop and increment a counter inside the generator.
* **Difficulty:** Difficult (if new to generators)

#### 28. Modules - Mix of Named and Default Exports

* **Problem Statement:** Create a file `utils.js` that has:
    * A default export for a function `add(a, b)`.
    * A named export for a constant `PI`.
    * A named export for a function `subtract(a, b)`.
    In `app.js`, import all of them and use them.
* **Concepts Quizzed:** Combining default and named exports, different import syntaxes.
* **Hints:** `import defaultName, { named1, named2 } from 'module';`.
* **Difficulty:** Difficult

#### 29. Destructuring Function Parameters

* **Problem Statement:** Write a function `displayUserInfo({ name, age, city = "Unknown" })` that takes an object as an argument and uses destructuring directly in the parameter list. The `city` should have a default value "Unknown". Log a message like "Name: \[name], Age: \[age], City: \[city]".
* **Concepts Quizzed:** Destructuring in function parameters, default values in parameter destructuring.
* **Hints:** The curly braces `{}` go directly in the function parameter list.
* **Difficulty:** Difficult

#### 30. Symbol - Unique ID

* **Problem Statement:** Create a function `createUniqueId()` that returns a unique ID using `Symbol()`. Demonstrate that two calls to this function produce different symbols.
* **Concepts Quizzed:** `Symbol()` primitive type, guaranteed uniqueness.
* **Hints:** `const id = Symbol();`
* **Difficulty:** Difficult (due to less common usage compared to other ES6 features, but conceptually simple)
