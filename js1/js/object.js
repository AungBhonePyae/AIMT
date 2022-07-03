let student=new Object();
student.name="mario";
student.age=22;

console.log(student);

//object literal
let person={
    name: "Andy",
    age: 32,
    addres: {
        no: 1,
        street: "hello",
        city: "yangon",
    },
    hobbies: [
        "cooking",
        "gaming"
    ]
}
console.log(person);
console.log(person.addres.street);
console.log(person.hobbies[1]);