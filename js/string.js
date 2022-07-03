let name="Mario";
let subject=new String("hello");

console.log(name);
console.log(subject);

let str="Hello World";
console.log(str.length);
console.log(str[3]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(1,5));
console.log(str.slice(4,1));
console.log(str.substring(1,5));
console.log(str.substring(5,1));
console.log(str.slice(2));
console.log(str.substring(2));

let str1="welcome";
console.log(str1.length);
let str2="    w e l c o m e   ";
console.log(str2.length);
console.log(str2.trim().length);

let str3="hey, hello";
console.log(str3.replace("l","L"));
console.log(str3.replaceAll("l","L"));
console.log(str3.indexOf("o"));
console.log(str3.search("o"));
console.log(str3.lastIndexOf("e"));

let username="Andy";
let age=12;
console.log("Name is "+username+"age is "+age);

console.log(`Name is ${username} age is ${age}`);

let str4="andy";
capital=str4.replace("a","A");
console.log(capital+";");

let str5="andy";
ind=str5[0];
result=ind.toUpperCase();
result1=str5.slice(1);
console.log(result+result1+";");

let ans=str5.replace(str5[0],str5[0].toUpperCase);
console.log(ans);