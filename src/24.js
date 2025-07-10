// #### 24. Classes - Getters and Setters

// * **Problem Statement:** Create a `Rectangle` class with a constructor taking `width` and `height`. Add a getter `area` that calculates and returns the area, and a setter `dimensions` that takes an object `{ width, height }` and updates both properties.
// * **Concepts Quizzed:** `get` and `set` keywords in classes.
// * **Hints:** `get area() { ... }`, `set dimensions({ width, height }) { ... }`.
// * **Difficulty:** Difficult


class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 5);
console.log(`Rectangle area: ${rect.area}`); // 50