/*
#### 19. Classes - Inheritance (Animal Kingdom)

Problem Statement:** Create a base class `Animal` with a constructor that takes `name` and a `makeSound()` method. Then, create a `Dog` class that extends `Animal` and overrides `makeSound()` to return "Woof!". Also, add a `breed` property to `Dog`.
Concepts Quizzed:** `class` inheritance, `extends` keyword, `super()` in constructor, method overriding.
Hints:** Use `super(name)` in the `Dog` constructor to call the parent constructor.
Difficulty:** Difficult
*/

class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound() {
        return "Some generic animal sound";
    }
}


class Dog extends Animal{
    constructor(name, breed) {
        super(name); // Call the parent constructor
        this.breed = breed; // Add breed property
    }

    makeSound() {
        return "Woof!"; // Override makeSound method
    }

}

const animal = new Dog("Buddy", "dusky husky");

console.log(animal.makeSound())