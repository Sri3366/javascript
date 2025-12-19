//Scopes
//var is a not a block scope that means "a" also accessed outside the block also
{
    var a=50
    console.log(a)
}
console.log(a)

//let and const is a block scope that means "b" is not accessed outside the block so "b" prints only one time
{
    let b=30
    console.log(b)
}
console.log(b)

//var is a functional scope that means "b" is not accessed outside the function so "b" prints only one time

//function game(){
//    var c=20
//    console.log(c);
//}
//game() 
//console.log(c)


//hoisting
//we can move the declaration part at top of the scope
//var supports hoisting
//let and const not supports hoisting

var a;
console.log(a)//undefined


console.log(a)//undefined
var a=20;


console.log(a)//error
let a=20;


console.log(a)//error
const a=20;

//tdz -  temporal deadzone
//the time between compilation phase and execution phase is called temporal deadzone
//var a; memory access a = undefined (initialization)
//let a; memory access a = (uninitialized)
//const a; memory access a = (uninitialized)