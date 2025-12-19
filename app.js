//function declaration
function add(a,b) {
    return a + b;
}
console.log(add(10, 20)); 

//Function without parameters
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}
greet();

//Function with parameters
function User(name) {
    console.log("Hello " +name);
}
User("Sri");
User("Venkat");

//Function with return value
function square(num) {
    return num*num;
    console.log("hello")
}
let result = square(5);
console.log(result); 

//function expression
let hello = function() {
    console.log("Hello!");
};
hello();

//function with objects
function Studentdata(student) {
    console.log(student.name);
    console.log(student.age);
}
Studentdata({name:"Sri",age: 22});

//method objects:
let hero = {
    name:"hello",
    age:22,
    loc:"hyd",
    zumba:function(){
        console.log(` Hi ${this.name}`)
    }
}
console.log(hero.loc)
console.log(hero.zumba())

//Arrow function with single parameters
let cube = num => num*num*num
console.log(cube(3)); 


//Arrow function with multiple parameters
let subNumbers = (a,b) => {
    return a-b;
};
console.log(subNumbers(3,7));

//anonymous function
let multiply = function(a,b) {
    return a*b;
};
console.log(multiply(4,5));

//Immediately invoked function
(function() {
    console.log("It run immediately");
})();


//higher order function
function greetUser(name, callback) {
    console.log(`hi ${name}`);
    callback();
    console.log("now bye")
}
function Bye() {
    console.log("Bhai");
}
greetUser("Sri",Bye);







