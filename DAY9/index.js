function letConstFun(){

            function outer1(){
                let name = "kiran";
                const age = 22;
                console.log(name, age);
                // name = "priya"  // can
                // age = 21;       //can't
                // console.log(name, age);
                
                function inner1(){
                    // let name = "priya"
                    // const age = 21;
                    name = "shikha" // can
                    //  age = 16;    // can't
                    console.log(name, age);
                }
                inner1();
            }
            outer1();
}letConstFun(); 
    
//  // let --> reaasigned and redeclared allowed in another block scope but , const --> nor reaasigned niether redeclred is allowed in block scope and in the same block na hi reassigned kr skte he or na hi redeclared

function TemplateNum(){
    let name = "Aastha";
    const Text = `${name} is my best friend`;
    console.log(Text);

    let count = 0;
    let countIncrease = `The count is ${++count}`;
    console.log(countIncrease);
}TemplateNum()

// //Template literals allow you to embed expressions and variables in strings using backticks (``) and ${} and we can also manuplate the string or a value in a string

function destructingValue(){
    const arr = [10, 20, 30, 40, 50]
    const [a, b, d] =[10, 20, 40]
    console.log(a, b)
    console.log(arr);

    const obj ={
        name: "kiran",
        age: 22,
        gender:"female",
        email: "kiranwalia2002Agmial.com"
    }
     const {name, email, age} = obj;
    console.log(email);

    const userData = {name, age, email}
    console.log(userData);
}destructingValue()

// //Destructuring allows us to extract values from arrays or properties from objects into distinct variables or using in another variables to east extracting values of array and object.

function SpreadOp(){
    const arr1 = [10, 20, 30, 40, 50, 60];
    const arr2 = [...arr1, 90, 80, 70];
    console.log(arr2);
    console.log(arr1);
    
    const obj1 ={name:"kiran", age:22, rollno:14}
    const obj2 ={...obj1, email:"kiranwalia2002@gmail.com"}
    console.log(obj2)
    console.log(obj1)

}SpreadOp();

//The spread operator (...) expands elements of an array or object in another array or object.

function RestOp(){
    function sum(...number){
        return number.reduce((total, current) => total + current, 0)
    }
    console.log(sum(2, 4, 5, 6, 8, 14));

    function mul(...number){
        // console.log(number)
        return number.map((num) => num*2)

    }
    console.log(mul(2, 4, 5, 6, 8, 14));
    
    
} RestOp();

// The rest operator collects multiple elements into an array.

function ForModule(){


    function add(a, b){
        return a + b;
    }
    console.log(add(2, 4))
    
    let r =10;

    const PI = 3.14;
    console.log( PI*r*r );

}ForModule();

// this is normal function tocheck that we can export this function into another file



function addition(a , b){
    return a + b
}addition(4,5);

module.exports={
    addition,
    letConstFun,
    TemplateNum,
    destructingValue,
    SpreadOp,
    RestOp,
    ForModule

}