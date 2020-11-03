// very easy 
let firstNumber = "10";
let secondNumber = "7";
console.log( " The difference between " + firstNumber + " and " + secondNumber + " is 3 ");




// easy 
let firstPerson = "Marisol";
let secondPerson = "Sol";
console.log(" The name " + firstPerson + " is longer than " + secondPerson + " by 4 characters");



// medium 
var answer1 = "hello you are whispering";
var answer2 = "hello you are yelling";

if (answer1 ="hello you are whispering"){
console.log(answer1.toLowerCase(answer1));
}
else if (answer2 = "hello you are yelling"){
}
console.log(answer2.toUpperCase(answer2));

// hard
function addition(firstNum, secondNum){
    return firstNum + secondNum;
}
function subtraction(firstNum, secondNum){
    return firstNum - secondNum;
}
function multiplication(firstNum, secondNum){
    return firstNum * secondNum;
}
function division(firstNum, secondNum){
    return firstNum / secondNum;
}
console.log(addition(1,2));

console.log(subtraction(10,9));

console.log(multiplication(11,2));

console.log(division(18,2));



// very hard
var firstNum = prompt ("Enter the first number");
var operator = prompt ("Enter the operator");
var secondNum = prompt ("Enter the second number");

function sum(firsNum, secondNum) {
    return firstNum + secondNum;
}
function sum(firsNum, secondNum) {
    return firstNum + secondNum;
}
function sum(firsNum, secondNum) {
    return firstNum + secondNum;
}
function sum(firsNum, secondNum) {
    return firstNum + secondNum;
}

if(operator == "+"){
    console.log(sum(parseFloat(firstNum),parseFloat(secondNum)));
}
else if(operator == "-"){
    console.log(subtraction(parseFloat(firstNum),parseFloat(secondNum)));
}
else if(operator == "*"){
    console.log(multiplication(parseFloat(firstNum),parseFloat(secondNum)));
}
else if(operator == "/"){
    console.log(division(parseFloat(firstNum),parseFloat(secondNum)));
}
else{
    console.log("this is not a symbol")
}
