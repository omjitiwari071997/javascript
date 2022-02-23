//1. Way to print in javascript
//alert("Its Om")
//  document.write("This is Om Ji");

//2. Javascript Console  API (Application programming interface)
// console.log("Hello word", 4 + 6, "Another log");
// console.warn("this is worning");
// console.error("this is an error");
// console.clear();
// console.assert(4==6);
// console.assert(4==(6-2));

// 3. Javascript Variables
// What are Variables? - Containers to store data values.
// In javascript we use var to build Variables
// var number1 = 34;
// var number2 = 30;
// console.log(number1 + number2);

// 4. Data types in Javascript
// Numbers
// var num1 = 455;
// var num2 = 400.32;

// String
// var str1 = "This is string";
// var str2 = 'This is string in single ';

// Objects
/*
var marks = {
    sonu: 56,
    monu: 60,
    saurabh: 99.11
}
*/
// console.log(marks);

// Booleans
// var a = true;
// var b = false;
// console.log(a);
// console.log(a,b);

// Undefined or Null both are diffrent
// var und = undefined;
// var und;
// console.log(und)

// var n = null;
// console.log(n)

/*
At a very high level , There are two types of data types in Javascript.
1. Primitive data types - undefined, null, string, number, booleans, symbol
2. Reference data types - Arrays and Objects
Most use - Numbers, String, Arrays and Objets
*/

// Arrays - Arrays is collection of elements.
// var arr = [3,4,"Om",5,7]
// console.log(arr)
// console.log(arr[2])

// #- Operators in Javascript
// Arithmetic opeators
// var a = 100;
// var b = 10;
// console.log("the value of a+b is",a + b);
// console.log("the value of a-b is",a - b);
// console.log("the value of a*b is",a * b);
// console.log("the value of a/b is",a / b);

// Assignment Operator
// var c=b;
// console.log(c);
// c +=5;
// c-=5;

// Comparision Operator
// var x = 30;
// var y = 40;
// console.log(x==y);
// console.log(x!=y);
// console.log(x>=y);

// Logical Operator
// Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logicla Not
// console.log(!false);
// console.log(!true);

/*
# - Function in Javascript
function is use to impliment the DRY principal
DRY = Do not repeat yourself
function avg(a, b){
    return (a+b)/2 ;
}
        or
function avg(a,b){
    c = (a+b)/2;
    return c;
}
c1 = avg(10,20);
c2 = avg(40,50);
console.log(c,c1,c2);
*/

/*
// # - Conditionals in javascript
// Single if statement
// var age = 5 ;
// if (age > 8){
    // console.log('you are not  a kids');
// }
// if - else statement
// var age = 5 ;
// if (age > 8){
//     console.log('you are not  a kids');
// }
// else{
//     console.log('you are a kids')
// }
// if - else ladder
age = 45;
if (age > 60){
    console.log('you are not a kid')
}
else if(age > 18){
    console.log('you are adult');

}
else if(age>50){
    console.log('you are a camplite man');
}
else{
    console.log('you are going old')
}
console.log('end of ladder')
*/

// # - for loop
// var arr = [1, 2, 3, 4, 5, 6, 7]
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// foreach loop

// arr.forEach(function(element){
//     console.log(element)
// }) 

// while loop

// We should use " let " in place of " var " because var is old javascript
// standerd and when we use let that we work till curli bracket.
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++ ;
// }

// do while loop

// let j=0;
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length)

// # - break and continue statment

// continue - its means live this itration and move next itration
// break - live the looping

// var arr = [1, 2, 3, 4, 5, 6, 7,];
// for (i = 0; i < arr.length; i++){
//     if (i == 2){
//         break;
//     }
//     console.log(arr[i])
// }
// ** when use break then index will 2 then that will out and print only 1,2
// var arr = [1, 2, 3, 4, 5, 6, 7,];
// for (i = 0; i < arr.length; i++){
//     if (i == 2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }
// ** use continue when index will 2 then continue so 3 will not print

// Array Method
// let myArr = ["fan","camera",34,"null","true"]
// console.log(myArr.length)
// myArr.pop();
// myArr.push("Om")
// myArr.shift();
// myArr.unshift("Om ji");
// console.log(myArr.unshift())
// const newLen = myArr.unshift("Om ji");
// console.log(newLen);
// console.log(myArr)

// # String Method of Javascript
// let iloveString = "Om is a good boy good good";
// console.log(iloveString.length)
// console.log(iloveString.indexOf("good"))
// console.log(iloveString.lastIndexOf("good"))
// console.log(iloveString.slice(1,4))
// d = iloveString.replace("Om","Dau")
// console.log(d , iloveString)

// # Javascript Dates
// let myDate = new Date();
// console.log(myDate)
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// # DOM Manupulation Method 
// Its means "Document Object Modal"
// We can use document to axis the HTML page 
// let elem = document.getElementById('click');
// console.log(elem)
let elemClass = document.getElementsByClassName('container')
console.log(elemClass);
elemClass[0].style.background = "yellow"
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
console.log(elemClass[0].innerHTML)
console.log(elemClass[0].innertext)
tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is new para";
tn[0].appendChild(createdElement)
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is create bold para";
tn[0].replaceChild(createdElement2, createdElement)
// removeChild(Element) ---> removes an elements
// We can search from google many DOM such as document.title , document.url,
// document.element,document.domain, etc.

// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// this is Event key
// This function "clicked is htnl function"
// function clicked(){
//     console.log('The button was clicked')
// }

// window.onload = function(){
//     console.log('The file is loaded')
// }

// // # Events in javascript)
// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clickd</b>"
//     console.log('Mouse click on container')
// })
// firstcontainer.addEventListener('mouseover', function(){
//     console.log('Mouse on container')
// })
// firstcontainer.addEventListener('mouseout', function(){
//     console.log('Mouse out of container')
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML= prevHTML;
//     console.log('Mouse up the container')
// })
// firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clickd</b>"
//     console.log('Mouse down the container')
// })
// * In "up" and "down" function have ue two function 1 . up ,down and 2. document.query

// # Arrow Function
// function summ(a,b){  /* normal function*/
//     return(a+b);
// }
// * Both function have same work but we use arrow function to insert in any function for single use 
// sum = (a,b)=>{  /*arrow function*/
//     return(a+b);
// }

// # SetTimeout and setinterval
// logkaro = ()=>{
//     console.log("I am your log")
// }
// setTimeout(logkaro, 2000); /* When we run then after 2 minute it print*/

logkaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clickd</b>"
    console.log("I am your log")
}
// setTimeout(logkaro, 3000); /* When we run then after 2 minute it print nad "We have clicked" will print*/
clr = setTimeout(logkaro, 3000); /* "clr and clearTimeout" is use to stop "setTimeout" */
clearTimeout(clr)

// # setInterval /* It use to repeat again and agina*/
// ogkaro = () => {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clickd</b>"
//     console.log("I am your log")
// }
// // setInterval(logkaro, 2000); /* It use to start the "setInterval" */
// clr = setInterval(logkaro, 2000); 
// clearInterval(clr)   /* It use to stop the setInterval */

// # localStorage 
// localStorage.setItem('name' , 'Om')
// localStorage  /* when we write the localStorage in console then It will print the storage data*/ 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// # JSON
// * JSON is use to convert data 
// obj = {name: "Om" , length: 1 , a: {This: "that"}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// parsed = JSON.parse(`{"name" : "Om" , "length" : 1 , "a": {"This" : "that"}}`)
// console.log(parsed);

// # Template literals - Backsticks ` `
a = 34 ;
console.log(`This is my ${a}`)
// * To use backsticks 34 will also will change in string 
