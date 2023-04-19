//1.. push(item1, item2, ..., itemN): Adds one or more items to the end of an array and returns the new length of the array.
//
// Initial array
let arr1 = [1, 2, 3];

console.log("Original array:", arr1);

// Add items to the end of the array
arr1.push(4, 5, 6);

console.log("Updated array:", arr1);


//2.. pop(): Removes the last item from an array and returns the removed item.
//
// Initial array
let arr2 = [1, 2, 3, 4, 5];

console.log("Original array:", arr2);

// Remove the last item from the array
let removedItem = arr2.pop();

console.log("Removed item:", removedItem);
console.log("Updated array:", arr2);


//3.. shift(): Removes the first item from an array and returns the removed item.
//
// Initial array
let arr3 = [1, 2, 3, 4, 5];

console.log("Original array:", arr3);

// Remove the first item from the array
let removed = arr3.shift();

console.log("Removed item:", removed);
console.log("Updated array:", arr3);




//4.. unshift(item1, item2, ..., itemN): Adds one or more items to the beginning of an array and returns the new length of the array.//
// Initial array
let arr4 = [1, 2, 3, 4, 5];

console.log("Original array:", arr4);

// Add items to the beginning of the array
let newLength = arr4.unshift(6, 7, 8);

console.log("Updated array:", arr4);
console.log("New length:", newLength);


//5.. splice(start, deleteCount, item1, item2, ..., itemN): Changes the contents of an array by removing, replacing, or adding items at a specified index and returns the removed items.
//
// Initial array
let arr5 = [1, 2, 3, 4, 5];

console.log("Original array:", arr5);

// Remove an item at index 2
let Item = arr5.splice(2, 1);

console.log("Removed item:", Item);
console.log("Updated array:", arr5);

// Replace an item at index 1
arr5.splice(1, 1, 6);

console.log("Updated array after replacement:", arr5);

// Add items at index 3
arr5.splice(3, 0, 7, 8, 9);

console.log("Updated array after addition:", arr5);


//6.. concat(item1, item2, ..., itemN): Returns a new array that consists of the original array joined with one or more additional items.
//
// Initial array
let arr61 = [1, 2, 3];
let arr62 = [4, 5, 6];

console.log("Array 1:", arr61);
console.log("Array 2:", arr62);

// Concatenate two arrays
let newArr = arr61.concat(arr62);

console.log("Concatenated array:", newArr);


//7.. join(separator): Returns a string representing the elements of an array joined together with a specified separator.
//
// Initial array
let arr7 = ["apple", "banana", "cherry"];

console.log("Array:", arr7);

// Join array elements with a separator
let joinedStr = arr7.join(", ");

console.log("Joined string:", joinedStr);




///8.. slice(start, end): Returns a shallow copy of a portion of an array into a new array, without modifying the original array.
//
// Initial array
let arr8= [1, 2, 3, 4, 5];

console.log("Array:", arr8);

// Create a shallow copy of a portion of the array
let slicedArr8 = arr8.slice(1, 4);

console.log("Sliced array:", slicedArr8);

