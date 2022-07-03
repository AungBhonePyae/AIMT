// for
// for(i=1;i<10;i=i+1){
//     console.log(i)
// }

// while
// let i=1
// while(i<3){
//     console.log(i)
//     i++
// }

// do while
// let y=0
// do{
//     console.log(y);
//     y+=3;
// } while(y<10)

let fruit=["apple", "orange", "mango", "grape", "strawberry"]
// for(i=0;i<fruit.length;i++){
//     console.log("fruit name is"+fruit[i])
// }

// for of
// for(f of fruit){
//     console.log(f)
// }

// for each
// fruit.forEach(function (f){
//     console.log(f)
// })

// map
const mapFruit=fruit.map(function(f){
    return f;
})
console.log(mapFruit);

// const todos=[
//     {id:1, title:"cleaning", isCompleted:false},
//     {id:2, title:"gaming", isCompleted:true},
//     {id:3, title:"homework", isCompleted:true},
//     {id:4, title:"exercise", isCompleted:true},
//     {id:5, title:"city", isCompleted:false}
// ]

// fileter

// const todoTrue=todos.filter(function(todo){
//     return todo.isCompleted==true;
// })
// console.log(todoTrue)


// let todoFalse=todos.filter(function (todo){
//        return todo.isCompleted==false;
// })
// const todoMap=todoFalse.map(function(todo){
//         return todo.title;
// })
// todoMap.forEach(function(todo){
//         console.log(todo+"is not completed")
// })

// todos.filter(todo=>todo.isCompleted==false)
//     .map(todo=>todo.title)
//     .forEach(todo=>console.log(todo+" is not completed"))

