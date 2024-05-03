//  More Conditional Test
// Tests for equality strings
console.log("Equality: ", "Apple" === "Apple");
console.log("Equality: ", ("apple" as string) === "orange");
// inequality with strings
console.log("Inequality: ", ("apple" as string) != "orange");
console.log("Inequality: ", ("apple" as string) === "banana");
//  Tests using the lower case function
console.log("lowercase: ", "HELLO".toLowerCase() === "hello");
console.log("lowercase:", ("WORLD" as string) === "hello");
//  Numerical tests involving equality and inequality
console.log("equality test with number:", 25 === 25);
console.log("Inequality test with number:", (8 as number) != 8);
// Greater than and less than
console.log(" greater than: ", 10 > 6);
console.log(" greater than: ", 6 > 10);
console.log(" less than: ", 4 < 10);
console.log(" less than: ", 10 < 4);
// greater than or equal to
console.log("greater than or equal:", 10 >= 5);
console.log("greater than or equal:", 5 >= 10);
//  less than or equal to
console.log("less than or equal:", 9 <= 4);
console.log("less than or equal:", 4 <= 9);
//  Tests using "and"  operator
console.log("AND operator:", 5 > 3 && 10 < 15);
console.log("AND operator:", 6 < 6 && 10 < 15);
// Tests using "or" operator
console.log("OR operator:", 5 > 3 ||10 < 15);
console.log("OR operator:", 6 < 6 ||10!=10);
//  Test whether an item is in a array
const fruit:string []=["Apple","Banana","Orange"];
console.log('Test "Apple"in a array:',fruit.includes("Apple"));
// Test whether an item is not in a array
const fruitbunch:string[]=["Apple","Banana","Orange","grapes"]
console.log('Test "Mango"is not in a array:',fruitbunch.includes("Mango"));

