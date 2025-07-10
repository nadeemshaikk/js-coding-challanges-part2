export const sum = (a, b) => a + b;

export function greet(name) {
  return `Hello, ${name}! Welcome.`;
}

export const getFirstTwo = (arr) => {
  const [first, second] = arr;
  return { first, second };
};

export const getNameAndAge = (user) => {
  const { name, age } = user;
  return { name, age };
};

export const concatenateArrays = (arr1, arr2) => [...arr1, ...arr2];

export function power(base, exponent = 2) {
  return base ** exponent;
}

export const doubleNumbers = (nums) => nums.map((n) => n * 2);

export const filterEvens = (nums) => nums.filter((n) => n % 2 === 0);

export class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    return `${this.name} says Woof!`;
  }
}