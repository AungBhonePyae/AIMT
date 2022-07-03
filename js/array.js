let arr1=new Array("one", "two", "three");
console.log(arr1);

let arr2=["apple","mango", "orange", 100,12.3, true];
console.log(arr2);
console.log(arr2.length);
console.log(arr2.sort());

let arr=["apple", "orange"];
console.log(arr);

arr.push("mango");
console.log(arr);

arr.unshift("grapes");
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr[1]);

arr[0]="strawberry";
console.log(arr);

arr[5]="watermalon";
console.log(arr);

let arr3=["php", "javascript"];
let arr4=["html", "css"];
console.log(typeof(arr3+arr4))
let ans=[...arr3, ...arr4]; //spread operator
console.log(ans);

[a1,a2,a3,a4]=ans //array destructing
console.log(a1);
console.log(a2);

console.log(Array.isArray(ans)); //static method