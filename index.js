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

let students = 20;
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

let username;

document.getElementById("mySubmit").onclick = function() {
   username = document.getElementById("myText").value;
   document.getElementById("myH1").textContent = `${username} welcome to javascript`;
}



