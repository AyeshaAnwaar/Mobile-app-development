//1.	charAt(index): Returns the character at the specified index in a string.//

const str1 = "Hello";
const index1 = 1; // Index of the character to retrieve

const char = str1.charAt(index1);

console.log(char); // Output: e


//2.	concat(str1, str2, ..., strN): Concatenates two or more strings and returns a new string.//

const str21= "Hello";
const str22= "world";

const concatenatedStr = str21.concat(" ", str22);

console.log(concatenatedStr); // Output: Hello world

//3.	indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value within a string, starting from a specified index or from the beginning of the string.
//
const str3 = "Hello world";
const searchValue3 = "world";
const fromIndex3 = 0; // Optional: starting index for search, default is 0

const index3 = str3.indexOf(searchValue3, fromIndex3);

console.log(index3); // Output: 6


//4.	 replace(searchValue, replaceValue): Returns a new string with all occurrences of a specified value replaced with another value.
//
const str4 = "Hello world";
const searchValue4 = "world";
const replaceValue4 = "everyone";

const replacedStr4 = str4.replace(searchValue4, replaceValue4);

console.log(replacedStr4); // Output: "Hello everyone"

//5.	 split(separator, limit): Splits a string into an array of substrings based on a specified separator, and optionally limits the number of substrings returned.
//
const str5 = "Hello,world,how,are,you";
const separator5 = ",";
const limit5 = 2;

const splittedArray5 = str5.split(separator5, limit5);

console.log(splittedArray5); // Output: ["Hello", "world,how,are,you"]

//6.	 toUpperCase(): Returns a new string with all characters converted to uppercase.
//
const str6 = "hello world";
const uppercaseStr6 = str6.toUpperCase();

console.log(uppercaseStr6); // Output: "HELLO WORLD"

//7.	trim(): Returns a new string with leading and trailing whitespace removed.
//
const str7 = "   Hello World   ";
const trimmedStr7 = str7.trim();

console.log(trimmedStr7); // Output: "Hello World"

//8.	startsWith(searchValue): Returns true if a string starts with the specified value, otherwise false.
//
const str8 = "Hello World";

console.log(str8.startsWith("Hello")); // Output: true
console.log(str8.startsWith("World")); // Output: false

//9.	endsWith(searchValue): Returns true if a string ends with the specified value, otherwise false.
//
const str9 = "Hello World";

console.log(str9.endsWith("World")); // Output: true
console.log(str9.endsWith("Hello")); // Output: false

//10.	length: Returns the number of characters in a string.
//
const str10 = "Hello World";
const length = str10.length;

console.log(length); // Output: 11


