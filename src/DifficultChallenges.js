// sum of elements in a array using reduce
//11
export const sumAll = (...numbers) => numbers.reduce((prev, curr)=> prev +curr, 0);
console.log("11. sumAll:", sumAll(5,1,2,3,4,5,5,6,1));


//12
const user = { id: 1, firstName:"Admin", email: "@example.com" };

const { 
  id: userId,
  firstName: fullName = "Guest",
  email 
} = user;

console.log("User ID:", userId);
console.log("Full Name:", fullName);
console.log("Email:", email);

//13
const userDetails = {user: { name: "Jane", address: { street: "Main St", city: "Anytown" } } };

const {name} = userDetails.user;
const{ street,city} = userDetails.user.address;

console.log("Name:", name);
console.log("Street:", street);
console.log("City:", city);

//14
const original = { a: 1, b: { c: 2 } };

const copy  = {...original};

copy.a =10;

console.log("Original:", original);
console.log("    Copy:", copy);

copy.b.c = 20;
console.log("Original:", original);
console.log("    Copy:", copy);
