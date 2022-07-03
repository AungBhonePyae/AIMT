let name= "Mario";
let subject= new String("hello");

console.log(name);
console.log(subject);

let str= "Hello world";
console.log(str.length);
console.log(str[4]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(2,4));
console.log(str.slice(4,2));
console.log(str.substring(2,4));
console.log(str.substring(4,2));
console.log(str.slice(2));
console.log(str.substring(2));


let str1="welcome";
console.log(str1.length);
let str2="   welcome  ";
console.log(str2.length);
console.log(str2.trim().length); 

let str3="Hey, Hello";
console.log(str3.replace("l", "L"));
console.log(str3.replaceAll("l", "L"));
console.log(str3.indexOf("o"));
console.log(str3.search("o"));
console.log(str3.lastIndexOf("H"));


//concatenation
let username="Andy";
let age=12;

let result=username+age;
console.log(result);

result="Name is "+username+" age is "+age;
console.log(result);

//template string
result=`Name is ${username} age is ${age}`;
console.log(result);

let str4="andy";

let ans1=str4.replace(str4[0], str4[0].toUpperCase())
console.log(ans1);

let ans2=str4[0].toUpperCase()+str4.slice(1)
console.log(ans2);



