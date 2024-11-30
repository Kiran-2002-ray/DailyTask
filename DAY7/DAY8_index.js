//................................DAY8.................................//

let Marks = [10, 20, 30, 40 ,50]
console.log(Marks[0]);
console.log(Marks[4], typeof(Marks[3]));

let Marks_inString = ["ten", "twenty", "thirty", "forty" ,"fifty"]
console.log(Marks_inString[3], typeof(Marks_inString[3]));

let car = [10, "speed", "red", "BMW" ,50]
console.log(Marks[0], car[2]);

let cars = {
    brand: "Toyoto",
    year: 2022,
    colour: "red",
    start: function(){
        console.log("car started");
    }
};
console.log(cars.brand, cars);
console.log(cars['colour']);
cars.start();

// Add an element to the end
let  Fruits = ["apple", 'mango', 'papaya'];
let PushElement = Fruits.push('cherry');
console.log(PushElement,Fruits);
let PushElement2 = Fruits.push('blueberry');
console.log(PushElement2,Fruits);


// Remove the last element
let PopElement = Fruits.pop();
console.log(PopElement,Fruits);
let PopElement2 = Fruits.pop();
console.log(PopElement2,Fruits);



let numbers = [5, 10, 15, 20, 25];

// Remove the first element
let shift_num = numbers.shift();
console.log(numbers, shift_num); 

// Add an element at the beginning
let unshift_num = numbers.unshift(5);
console.log(numbers, unshift_num); 

// filter
let filtered = numbers.filter(num => num > 15);
console.log(filtered,"filtered array from", numbers); 

// map
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled); 

// Find the sum of all numbers
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum); 

// Executes a function for each element.
let foreach_num = numbers.forEach(numbers => console.log(numbers));

// The join() method 
let num = [10, 20, 30, 50, 60, 70, 80]
let join_num = num.join("', '");
console.log(join_num)
let join_num2 = num.join(" - ");
console.log(join_num2)




let fruits = ["apple", "banana", "cherry"];

// Join the array into a string
let fruitsString = fruits.join(", ");
console.log("Joined string:", fruitsString); 

// Split the string back into an array
let splitFruits = fruitsString.split(", ");
console.log("Split array:", splitFruits); 



// checks if an array contains a specific element. It returns true if found and false otherwise.
let include_num = num.includes(90);
console.log(include_num)
let include_num2 = num.includes(70);
console.log(include_num2)

// flat
let number = [1, 2, [3, 4], [5, [6, 7]]];
let flattened = numbers.flat();
console.log(flattened); 

let nestedNumbers = [1, [2, [3, [4, 5]]]];
console.log(nestedNumbers.flat(1)); 
console.log(nestedNumbers.flat(2)); 
console.log(nestedNumbers.flat(Infinity)); 


// The splice() method 
let fruit = ["apple", "banana", "cherry", "date"];

let fruit_splice_remove = fruits.splice(1, 2); // Remove 2 elements starting at index 1
console.log(fruit, fruit_splice_remove); 

let fruit_splice_add = fruits.splice(1, 0, "banana", "cherry"); // Add elements at index 1
console.log(fruit_splice_add);

let fruit_splice_replace = fruits.splice(2, 1, "mango"); // Replace 1 element at index 2
console.log(fruit_splice_replace); 


// The slice() method 
let fruits_slice = ["apple", "banana", "cherry", "date"];
let slicedFruits_remove = fruits.slice(1, 3); // Extract elements from index 1 to 2
console.log(slicedFruits_remove); 

let slicedFruits = fruits.slice(2); // Extract elements from index 2 to end
console.log(slicedFruits); 

