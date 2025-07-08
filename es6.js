const exampleLet = () => {
	console.log(z) // Output: undefined
	let x = 10
	// let x = 20 Error: Cannot redeclare using let
	if (true) {
		let y = 20
		console.log(x) // Output: 10 (accessible from outer scope)
		console.log(y) // Output: 20 (accessible within its block)
	}
	// console.log(y) // Error: y is not defined (y is block-scoped)
	x = 15 // Allowed: x can be reassigned
	console.log(x) // Output: 15
	var z = ''
}
// exampleLet()
// console.log(x) // Output: Error
// console.log(`typeof null is ${typeof null}`) //

const constExampleFn = () => {
	const user = { name: 'Alice', age: 30 }
	// user = { name: '', age: 23 } // Error, cannot reassign const
	console.log(user)
	user.name = 'Tharun'
	console.log(user)

	const numbers = [1, 2, 3]
	console.log(numbers)
	numbers.push(4)
	numbers.unshift(0)
	console.log(numbers)
}
// constExampleFn()

const createUser = (name, age) => ({ name: name, age: age })

const createUserFn = (name, age) => {
	// console.log(arguments)
	return { name: name, age: age }
}

function createUserFn2(name, age) {
	console.log(arguments)
	return { name: name, age: age }
}

console.log(createUserFn('anil', 20))
console.log(createUserFn2('anil', 20))
