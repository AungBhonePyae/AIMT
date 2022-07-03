// for
for (let i = 1; i <= 10; i = i + 2) {
    console.log("number is " + i);
}

// while
let x = 0;
while (x < 3) {
    console.log(x);
    x++;
}

//do while
let y = 0;
do {
    console.log("y is " + y);
    y += 3;
} while (y < 10)


let fruits = ["apple", "orange", "mango", "grapes", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log("fruit name is " + fruits[i]);
}

//for of
for (f of fruits) {
    console.log("fruit name is " + f);
}

//forEach
fruits.forEach(function (f) {
    console.log(f.toUpperCase());
})

// map
const mapFruits = fruits.map(function (f) {
    return f.toUpperCase();
})
console.log(mapFruits);

const todos = [{
        id: 1,
        title: "cleaning",
        isCompleted: false
    },
    {
        id: 2,
        title: "homework",
        isCompleted: true
    },
    {
        id: 3,
        title: "laundry",
        isCompleted: true
    },
    {
        id: 4,
        title: "shopping",
        isCompleted: false
    },
    {
        id: 5,
        title: "coding",
        isCompleted: true
    },
]
//filter
const todoTrue = todos.filter(function (todo) {
    return todo.isCompleted == true;
})
console.log(todoTrue);

const todoFalse = todos.filter(function(todo) {
    return todo.isCompleted == false;
})
const todoMap = todoFalse.map(function(todo) {
    return todo.title;
})
todoMap.forEach(function(todo) {
    console.log(todo + " is not completed");
})

todos.filter(todo => todo.isCompleted == false)
    .map(todo => todo.title)
    .forEach(todo => console.log(todo + " is not completed"))

