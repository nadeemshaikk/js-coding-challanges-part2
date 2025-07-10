//17

const obj = [{ item: "A", price: 10 }, { item: "B", price: 20 }, { item: "C", price: 30 }];

const calculate =(acc, curr) => acc + curr.item;
const totalPrice = obj.reduce(calculate, 0);
console.log("Total Price:", totalPrice);