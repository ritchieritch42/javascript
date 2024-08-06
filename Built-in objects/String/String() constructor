// new String constructor creates an string object wrapper
// car === "toyota" is false
const car = new String("toyota"); 

// String constructor creates a string primitive
// house === "single family residence" is true
const house = String("single family residence"); 


console.log(car instanceof String, typeof car); // is true "object"
console.log(house instanceof String, typeof house); // is false "string"

// DO NOT USE String AS CONSTRUCTOR REGULARLY

/*
Because of JavaScript's autoboxing technique, which temporarily converts the primitive string to a string object
you can apply the same methods to the primitive string as you would to the string object wrapper variable.
*/

console.log(car.length);
console.log(house.length);

// Since String is explicit, it is then the only case where a sybmol can be converted a string without throwing an error
const tree = Symbol("dogwood");
console.log(String(tree)); // Logs "Symbol(dogwood)"

/*
If we try to use other string methods on the symbol we find that JavaScript throws an error.
This is because JavaScript cannot implicity convert a Symbol to a String.
The reason why it was built this way was to preserve the unique and immutable nature of symbols.
*/
const plant = Symbol("cactus");
`${plant}`; // TypeError: Cannot convert a symbol value to a string
"" + plant; // TypeError: Cannot convert a symbol value to a string
"".concat(sym); // TypeError: Cannot convert a Symbol value to a string