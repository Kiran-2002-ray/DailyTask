const { addition, letConstFun, TemplateNum, destructingValue, SpreadOp, RestOp, ForModule} = require('./index');

console.log("this is the result of imported packages")
    letConstFun();
   
console.log(addition(7,2))
console.log(addition(7,20))
console.log(ForModule());
