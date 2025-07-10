const arr = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
];

const x = arr.reduce((acc, item) => {
    if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item.name);
      return acc;
}, {});

console.log("Grouped:", x);
