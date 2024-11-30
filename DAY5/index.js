//...........................DAY 5 ...............................//

function Greet(){
    console.log("hello");
}
Greet();

function sum(a,b){
    let c = a+b;
    console.log(c);
}
sum(4,5);

const sub = (d,e) => {
    let f = d-e;
    console.log(f);
}
sub(9,4);

const multiply = (g,h) => {
    let i = g * h;
    console.log(i);
}
multiply(5,8);

const multiply2 = (j,k) =>  j * k; 
console.log(multiply2(9,3))

const divide = (l,m) => l / m; 
console.log(divide(9,3))

const modulus = (o,p) => o % p; 
console.log(modulus(9,3))

const modulus2 = (o,p) => o % p ===0; 
console.log(modulus2(9,3))


function printSum(){
    let a = 10;
    let b = 12;
    return () => {
            let c= a + b;
            console.log(c);
        } 
} 
const Sum = printSum();
Sum();




function Outer() {
    let y = 10;
    function inner() {
        console.log(y);
    }
    inner();
}
Outer();




const createCounter = () =>{
    let count = 7;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
};

const Counter = createCounter();

console.log(Counter.getCount())
console.log(Counter.getCount())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.decrement())
console.log(Counter.getCount())

