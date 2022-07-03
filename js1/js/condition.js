//if
let a=1 
if(a==0) {
    console.log ("a is zero");
}

// if else
let b=1
if(b==1) {
    console.log('b is one');
} else {
    console.log('b is not one');
}

// if else if
let c=3;
if(c>3) {
    console.log("c is greater than three")
} else if(c>2) {
    console.log("c is greater than two")
} else if(c >2) {
    console.log('c is grater than one')
} else {
    console.log('c is unknown');
}

let d=-4
if(d>0 && d%2 == 0) {
    console.log("even and positive");
} else {
    console.log("error");
}

let e=4;
if(e<0 || e%2!=0) {
    console.log("odd or negative")
} else {
    console.log("error");
}
