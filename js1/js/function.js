function sayHello() {
    console.log('hi');
    return "welcome";
    // console.log("here");
}
// console.log(sayHello());

function sayHi(name="Hellen") {
    console.log(name+" says Hello");
}
// sayHi("Andy");
// sayHi("Alice");
// sayHi("Mario");
// sayHi();

function sum(num1=0, num2=0) {
    console.log(`num1 is ${num1} and num2 is ${num2}`);
}
// sum(1,2);
// sum(); //NaN=>Not a Number
// sum(3);




// const greet = () => console.log("good morning");
const greet = _ => console.log("good morning");
greet();

const sub = (num1, num2) => num1-num2;
console.log(sub(3,2));

const sayHey = name => name + " says hello";
console.log(sayHey("mario"));

// *  
function mul(num1=1, num2=1) {
    return num1*num2;
}



