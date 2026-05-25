// console.log("welcome to javascript funtion() world");
// console.log('welcome to javascript world');
//console.log(`welcome to javascript world ${} students`);

/*
ds;lafj'l;sdl;asflkdsjfk
djlfjkdaf

kjadfhudshfdsfuo

*/


// // window.alert("Welcome to javascript world");

// document.getElementById("myH1").textContent = `Hello welcome to js world`;
// document.getElementById("myP").textContent = "I like briyani";

// let a = 10;

// let b = 90;

// console.log(a + b);


// let firatName = "ganesh";
// let lastName = "kumar";
// let email = "ganesh@gmail.com";

// console.log(firatName);
// console.log(lastName);
// console.log(email);



// let online = false;

// console.log(`ganesh is online: ${online}`);



// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2; // quatient
// students = students ** 3;
// students = students % 2; // remainder


// agumanted assignment operator

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2; // quatient
// students **= 3;
// students %= 2; // remainder

// increment and decerement operators

// let students = 20;
// post increment
// students++;
// post decrement
// students--;

//pre increment
//30
// ++students;
// pre decrement

// --student;


// operators prcedence 

// 1. paranthis ()
// 2. exponents
// 3. multipcation division & modulo
// 4. addition and subration 

// let result = 1 % 6 + 8 / 2;
// let result = 6 / 2 ** (2 + 5);

// console.log(result);


// let username = window.prompt("What is your username name?");
// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function() {
//    username = document.getElementById("myText").value;
//    document.getElementById("myH1").textContent = `${username} welcome to javascript`;
// }


// let age = window.prompt("How old are you");
// age = Number(age)
// age += 1;
// console.log(age, typeof age);

// let x = "lemon";
// let y = "lemon";
// let z = "lemon";


// let x = 12;
// let y = 12;
// let z = 12;

// let x = "";
// let y = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);


// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const PI = 3.14;

// PI = 536789;

// console.log(PI);



// age = 10;
// // false
// if(age >= 18) {
//    console.log("You cannot vote");
// } 


// age = 10;
// // false 
// if(age >= 18) {
//    console.log("You are senior");
// } else {
//    console.log("You are Junior");
// } 


// let mark = 90;

// if(mark < 10) {
//    console.log("Your garde is E");

// } else if(mark >= 10 && mark < 30) {
//      console.log("Your garde is C");
// } else if(mark >= 30 && mark <70 ) {
//    console.log("Your garde is B");
// } else if(mark >= 70 && mark <= 100) {
//    console.log("Your garde is A");
// } else {
//    console.log("Invaild mark");
// }


// const myCheckbox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const rupyaBtn = document.getElementById("rupyaBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");


// mySubmit.onclick = function() {
//    if(myCheckbox.checked) {
//      subResult.textContent = `You are subscribed`;
//    } else {
//        subResult.textContent = `You are not subscribed`;
//    }

//    if(visaBtn.checked) {
//       paymentResult.textContent = `You are paying with visa`;
//    }
// }



// let age = 20;

// if(age >= 18) {
//    console.log("You can vote");
// } else {
//    console.log("You cannot vote");
// }

// const result = age >= 18 ? "You can vote" : "You cannot vote";

// console.log(result);


// let testScore = 96;

// let Garade;


// switch(true) {

//    case testScore >= 90:
//    Garade = "A";
//    break;

//    case testScore >= 80:
//    Garade = "B";
//    break;

//    case testScore >= 70:
//    Garade = "C";
//    break;

//    case testScore >= 60:
//    Garade = "D";
//    break;  
   
//    default:
//       Garade = "F";


// }

// console.log(Garade);



//12
// 0 to n -1 = 0 to 11
//             
// let username = "ganesh kumar ";

// charAt()

// const res = username.charAt(1);
// const res = username.indexOf("a");
// const res = username.lastIndexOf("a");
// const res = username.length;
// const res = username.trim();
// const res1= username.toLowerCase();
// const res2= username.toUpperCase();

// let result = username.startsWith(" ");
// let result = username.endsWith(" ");



// 



// if(result) {
//    console.log("Your username cant start with space");
// } else {
//    console.log(username);
// }



// console.log(res1, res2);



// dinesh@gmail.com

// const fullName = "joseph krish";

// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7);

// let firstChar = fullName.slice(0,1)
// let lastChar = fullName.slice(-1)



// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// let firstChar = fullName.slice(0,1)
// let lastChar = fullName.slice(-1)

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);


// const temp = -25;

// if(temp > 0 && temp <= 30) {
//     console.log("The weather is good");
// } else {
//     console.log("weather is bad");
// }

// if(temp <= 0 || temp >= 30) {
//     console.log("The weather is bad");
// } else {
//     console.log("weather is good");
// }

// const isSunny = false; 

// if(!isSunny) {
//     console.log("It is cloudy ");
// } else {
//     console.log("It is suuny");
// }

// const PI = "3.14";

// if(PI == 3.14) {
//     console.log("That is PI");
// } else {
//     console.log("That is not PI");
// }
// "3.145678"
// 
// if(PI != 3.14) {
//     console.log("That is PI");
// } else {
//     console.log("That is not PI");
// }


// if(PI !== "3.14") {
//     console.log("That is PI"); // true
// } else {
//     console.log("That is not PI"); // false
// }

//   1step       2nd step   4th 

//          i = 10    i >= 1
// for(let i = 1;    i <= 10;     i--) {

//     // 3rd step 
//     console.log(i);
        
// }
// for(let i = 10; i >= 1;     i--) {

//     // 3rd step 
//     console.log(i);
        
// }


// function happyBirthday(username, age) {
// console.log("Happy birthday to you!!!");
// console.log("Happy birthday to you!!!");
// console.log(`Happy birthday dear ${username}`);
// console.log("Happy birthday dear to you");
// console.log(`you are ${age} years old`);

// }

// happyBirthday("Ganesh", 24);
// happyBirthday("john", 22);



// function add(x, y) {
//    return x + y;
// }
// function sub(y, x) {
//     let result = y - x;
//     return result;
// }

// const addResult = add(1, 2);
// const subResult = sub(10, 2);

// console.log(add(1, 3));
// console.log(subResult);

// function isEven(number) {
    // if(number % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

//     return number % 2 === 0 ? true : false;
// }

// console.log(isEven(11));



// function isvaildEmail(email) {

//     if(email.includes("@")) {
//         return true;
//     } else {
//         return false;
//     }

// }


// console.log(isvaildEmail("ganeshgamil.com"));

// let x = 16;

// function func1() {
//     let x = 1;
//     let y = 29;
//     console.log(x);
// }
// function func2() {
//     let x = 1;
//     console.log(x);
//     console.log(y);
// }

// func1();
// func2();

// //               0         1        2         length = 3
// let fruits = ["apple", "banana", "orange"];

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// for(let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }

// fruits.sort().reverse();

// for(let fruit of fruits) {
//     console.log(fruit);
// }


// fruits.push("coconut");
// fruits.pop();

// fruits.unshift("Mango");
// fruits.shift();


// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");
// console.log(numOfFruits);
// console.log(fruits);
// console.log(index);


// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let numbers = [1, 2 , 3, 4, 5, 6];
 
// console.log(numbers);
// console.log(...numbers);
 
// let maximum = Math.max(...numbers);

// console.log(maximum);


// let username = "prakesh kumar";

// console.log(username);
// console.log(...username);

// let fruits = ["apple", "orange", "banana"];

// let veggies = ["onions", "carrrot", "potato"];

// let foods = [...fruits, ...veggies, "egggs", "milk"];

// console.log(fruits);
// console.log(foods);

// const food1 = "lemon rice";
// const food2 = "veg rice";
// const food3 = "chicken rice";
// const food4 = "mushroom rice";


// function getFood(...foods) {
//     return foods;
// }

// function openFridge(...foods) {
//    console.log(foods);
// }

// const foods = getFood(food1, food2, food3, food4);

// console.log(foods);


// hello();
// goodbye();


// hello(wait);

// function goodbye() {
//     console.log("goodbye");
// }

// function leave() {
//     console.log("Leave");
// }

// function wait() {
//     console.log("Wait");

// }

// function hello(callback) {
//     setTimeout(function() {
//          console.log("Hello prakesh");
//          callback();
//     }, 4000)
// }

// sum(displayWeb, 10, 10);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result) {
//       console.log(result);
// }

// function displayWeb(result) {
//     document.getElementById("myH1").textContent = result;
// }
//            0   1  2  3 4  5
// let numbers = [1, 2, 3, 4, 5, 6];

// // numbers.forEach(double);
// numbers.forEach(square);
// numbers.forEach(display);


// function double(element, index, array) {
//     array[index] = element * 2;
// }
// // cube

// function square(element, index, array) {
//     array[index] = Math.pow(element, 3);
// }

// // cubu root

// function display(element) {
//     console.log(element);
// }



// let fruits = ["apple", "orange", "banana", "coconut"];

// // fruits.forEach(upperCase);
// fruits.forEach(capitalize);
// fruits.forEach(display);


// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// lowercase


// function capitalize(element, index, array) {
//      array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// lastLetterCapitalize 

// function display(element) {
//     console.log(element);
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares =  numbers.map(square);

// console.log(squares);

// function square(element) {
//   return Math.pow(element, 2);
// }

// const students = ["jayaprakesh", "santhosh", "siva", "narendhra"];

// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);


// function upperCase(element) {
//   return element.toUpperCase();
// }

// const dates = ["2024-1-10", "2022-4-29"]

// const formmatedDates = dates.map(formatDates);

// console.log(formmatedDates);


// function formatDates(element) {
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`
// }
// const numbers = [1, 2, 3, 4, 5, 6];

// let evenNums = numbers.filter(isEven);

// console.log(evenNums);

// function isEven(element) {
//    return element % 2 === 0;
// }

// const ages = [16, 17, 18, 19, 20, 60];


// const adults = ages.filter(isAdult);

// console.log(adults);


// function isAdult(element) {
//     return element >= 18;
// }

// isChild

// const words = ["apple", "orange", "promegrante", "coconut"];

// const shortWords = words.filter(getShortWords);

// console.log(shortWords);

// function getShortWords(element) {
//     return element.length <= 6;
// }

// long words

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`${total.toFixed(2)}`);

// //             105     
// function sum(pre, element) {
//     return pre + element
// };


// Function declaration

// function hello() {


// }
    
// function expression

// const hello = function() {
//   console.log("Hello");
// }

// function hello() {
//     console.log("Hello");
// }

// setTimeout(function(){
//     console.log("hello");
// },3000);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map(function(element) {
//     return Math.pow(element, 2);
// });


// console.log(squares);

// const hello = function(){
//     console.log("Hello");
// }

// setTimeout(() => console.log("Hello"), 3000);




// const hello = (name, age) => {console.log(`hello ${name}`) 
//                      console.log(`my age is ${age}`)};

// hello("ganesh", 24);



const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);
