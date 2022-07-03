// let, var, const

// let => no redeclare, allow reassign
let name; //declare
name="Andy"; //assign
console.log(name);
//let name; // redeclare
name="Alice"; //reassign
console.log(name);

//var => allow redeclare, allow reassign
var age; //declare
age=12; //assign
console.log(age);
var age; //redeclare
age=33; //reassign
console.log(age);

//const => no redeclare, no reassign
const y=10; //
console.log(y);
// y=5; //reassign
// console.log(y);
// const y=5; //redeclare
