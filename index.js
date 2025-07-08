import Dog from './dog.mjs'
/**
 * Write an arrow function sum(a, b) that takes two numbers and returns their sum.
 */
const sumArrowFn = (a, b) => a + b

function sum(a, b) {
	// a = 2, b= 3
	// Sum of 2 + 3 = 5
	console.log(`Sum of ${a} + ${b} = ${a + b}`)
	return a + b
}
console.log(`Sum = ${sumArrowFn(2, 3)}`)

/**
 * Create a function greet(name)
 * that takes a string name and returns a greeting message like "Hello, [name]! Welcome."
 * using template literals.
 */

function greetFn(name) {
	return 'Hello' + name + '! Welcome'
}

const greet = (name) => `Hello ! ${name}! Welcome.`
console.log(greet('Harshitha'))

/**
 * Given an array [10, 20, 30, 40], use array destructuring to extract the
 * first two elements into variables first and second.
 */
const arr = [10, 20, 30, 40]
let [first, second] = arr
console.log(`First is ${first} and second is ${second}`)

/**
 * Given an object { name: "Alice", age: 30, city: "New York" },
 * use object destructuring to extract name and age into variables.
 */
const obj = { name: 'Alice', age: 30, city: 'New York' }
let { name: fullName, age, address = 'No Address' } = obj
console.log(`Name is ${fullName} and age is ${age} and address is ${address}`)

/**
 *  Combine two arrays [1, 2, 3] and [4, 5, 6] into a single new array [1, 2, 3, 4, 5, 6] using the spread operator.
 */
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const joinedArr = [...arr1, ...arr2]
console.log(arr1.concat(arr2))

/**
 * Create a function power(base, exponent) that returns base raised to the exponent.
 * If exponent is not provided, it should default to 2.
 */
const power = (base, exponent = 2) => Math.pow(base, exponent)

function powerFn(base, exponent) {
	if (exponent === undefined) {
		exponent = 2
	}
	return Math.pow(base, exponent)
}

console.log(`5 ^ 4 = ${power(5, 4)}`)
console.log(`5 ^ default exponent =  ${power(5)}`)

/**
 * Given an array of numbers [1, 2, 3, 4], use the map() method to return a new array
 * where each number is doubled.
 */

const arrNumbers = [1, 2, 3, 4]
const doubledNumber = (num) => num * 2
console.log(arrNumbers.map(doubledNumber))

const myDog = new Dog('Dog', 'Breed')
console.log(myDog.bark())
