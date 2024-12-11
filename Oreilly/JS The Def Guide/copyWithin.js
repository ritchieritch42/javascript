// Basic copyWithin Functionality with one argument (index)
myArray = [1, 2, 3, 4, 5];

function testCopyWithin(array, index) {
    let value = array[0];

    array.forEach(() => {
        array.copyWithin(index);
    });

    console.log(`${array}\n`);
    
    array.forEach((_, location) => {
        array[location] = value++;
    });
    return;
}

for (let i = 0, length = myArray.length; i <= length; i++) {
    testCopyWithin(myArray, i);
}