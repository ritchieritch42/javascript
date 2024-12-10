ogArray = [1, 2, 3, 4, 5];

myArray = [...ogArray];
myArray.forEach(() => {
    console.log(myArray.copyWithin(1));
});

console.log('\n');

mySecondArray = [...ogArray];
myArray.forEach(() => {
    console.log(mySecondArray.copyWithin(2));
});

console.log('\n');

myThirdArray = [...ogArray];
myArray.forEach(() => {
    console.log(myThirdArray.copyWithin(3));
});

console.log('\n');

myFourthArray = [...ogArray];
console.log(myFourthArray);

myFourthArray.forEach(() => {
    console.log(myFourthArray.copyWithin(4));
});