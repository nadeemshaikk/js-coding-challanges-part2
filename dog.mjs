/**
 * Define a simple Dog class with a constructor that takes name and breed as arguments and
 * sets them as properties. Add a method bark() that returns ${this.name} says Woof!.
 */

class Dog {
	constructor(name, breed) {
		this.name = name
		this.breed = breed
	}

	bark() {
		return `${this.name} says Woof!`
	}
}

export default Dog
