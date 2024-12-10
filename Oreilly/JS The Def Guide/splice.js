myArray = ["one", "two", "three", "four"];
myArray.splice(0, 0, "zero");

console.log(myArray);

// counts like the length property does (1, 2, 3, 4)
// NOT LIKE normal computer programs do (0, 1, 2, 3)
myArray.splice(4, 1, "Four");
console.log(myArray);

/*

splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, //..., // itemN)

*/