let fname = "kiran"; // string
const age = 22;  // number
var student = true;   //boolean

console.log(fname, age, student);

let c;
console.log(c); // undefined result
let y = null;
console.log(y); // null result

let syn = Symbol("unique");
console.log(syn); // symbol(unique) result\

let big = 1234567890123456789012345678901234567890n;
console.log(big); // 1234567890123456789012345678901234567890n result

// (non- promitive datatypes)
Object

let person = {
    Name: "kiran",
    Age: 22
};


//Array

const colour= ["red", "green", "blue"];

//Function
function geet(){
    return"Hello!";
}

console.log(person, colour, geet());

// type conversion

let result = "5" + 2; // "52" (string + number -> string)
let diff = "5" - 2;   // 3 (string - number -> number)
let isTrue = 1 + true; // 2 (boolean -> number)

console.log(result, diff, isTrue)

// To String
let num = 123;
console.log(String(num)); // "123"

// To Number
let str = "45";
console.log(typeof(Number(str)), Number(str)); // number 45

// To Boolean
let value = 0;
console.log(Boolean(value)); // false (0 is falsy)


let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);

let num1 = 10;
let num2 = 5;

console.log("Add:", num1 + num2);
console.log("Sub:", num1 - num2);
console.log("Mul:", num1 * num2);
console.log("Div:", num1 / num2);

let isGreater = 10 > 5;
console.log("Is 10 greater than 5?", isGreater);
