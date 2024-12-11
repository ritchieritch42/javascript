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

// The general copyWithin syntax is:
// array.copyWithin(target, start, end);
// Here's some other examples showing this
// Target is required
// The start default is 0 unless specified
// The end default is length -1 unless specified
// The sequence copied is start to end
// The place pasted is target

newArray = [...myArray];
console.log(newArray.copyWithin(0, 5) + '\n') // 1, 2, 3, 4, 5
console.log(newArray.copyWithin(2, 2, 5) + '\n') // 1, 2, 3, 4, 5