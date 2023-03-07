let x = 5; // the "let" keyword allows you to create variables that you can re-assign values to

const y = 6; // the "const" keyword allow you to create variables that cannot be changed later

//DATA TYPES
// strings
// numbers
// booleans (true or false)
// objects
// arrays

//STRING
// // console.log('hello')
// const str1 = "Hello"
// const str2 = "100"
// const str3 = "World"

// console.log(str1[0]); // H
// console.log(typeof str2)
// console.log(typeof x)

// console.log(str1 + " " + str3)

//classwork
// const name2 = prompt("type in your name")
// console.log(`Hello ${name2}`)

// const str4 = "Today is a good day."
// const str5 = "Today,is,a,good,day"
//LENGTH
// console.log(str4.length)

// //SPLIT
// const arr1 = str4.split(" ");
// // console.log(arr1)

// // const arr2 = str5.split(",")
// // console.log(arr2.length)

// //charAt
// console.log(str4.charAt(1));

// //indexOf
// console.log(str4.indexOf("T"));
// console.log(str4.indexOf("good"));

//classwork
// const sentence = prompt("type in a sentence")
// const arr3 = sentence.split(" ")
// const numWords = arr3.length

// console.log(`There are ${numWords} words in this sentence`)

//assignment

//first prompt => Today was a fun day
//second prompt => fun
// output => The word fun is found at index 12 in the sentence

//NUMBERS
//ARITHMETIC OPERATORS
// + -> addition
// - -> subtraction
// * -> multiplication
// / -> division
// % -> modulo
// ** -> exponentiation

const z = x + y;
// console.log(z)

const z2 = y - x;

// console.log(z2)

// const response = prompt("type in anything")
// const res2 = prompt("type in another thing")

// console.log(response)
// console.log(res2)

//classwork✔️
// const num1 = prompt("type in a number")
// const num2 = prompt("type in another number")

// const mul = num1 * num2
// console.log(mul)

// classwork
// const num1 = prompt("type in a number")
// const num2 = prompt("type in another number")

// console.log(`${num1} raised to power ${num2} is ${num1 ** num2}`)

//classwork
//first prompt => 5
//second prompt => 2
//output => 5 raised to power 2 is 25
// const num1 = prompt("type in a number")
// const num2 = prompt("type in another number")

// console.log(`${num1} raised to power ${num2} is ${num1 ** num2}`)

//COMPARISON OPERATORS
// == -> is equal to
// != -> not equal to
// > -> greater than
// < -> less than
// >= -> greater than and equals to
// <= -> less than and equals to
// === -> is equal to and same type

// const x = 6
// const y = 7

// console.log(x == y) //false
// console.log(x != y) //true
// console.log(x > y)  //false
// console.log(x < y)

// const z = 7

// console.log(y >= z) //true

// const a = "6"

// console.log(x == a)// true
// console.log(x === a)// false

//MODULO

// console.log(5 % 2) // 1
// console.log(6 % 2) // 0
// console.log(6 % 4) // 2

// console.log(7 % 2 == 0) //false
// console.log(10 % 2 == 0) //true

// const num = prompt("type in a number")

//CONDITIONALS
// if(true){
//     //do something
// }else{
//     // do something else
// }

// if(num % 2 == 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// classwork1
// if (num % 5 == 0) {
//     console.log(`${num} is divisible by 5`)
// } else {
//     console.log(`${num} is not divisible by 5`)
// }

//classwork2

// const age = prompt("type in your age")
// if (age >= 18) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("You are not eligible to vote")
// }

//classwork
// const number = prompt("type in a number")

// if (number == 0) {
//     console.log("You typed in 0")
// } else if (number > 0) {
//     console.log("Positive number")
// } else {
//     console.log("Negative number")
// }

//LOGICAL OPERATORS
// && -> AND
// || -> OR
// ! -> NOT

//AND

// let x = 6
// let y = 7
// let z = 8

// console.log(x < y && x < z); // true
// console.log(x < y && x > z); //false

// console.log(x < y && x < z && y > z); //false

// //classwork
// const age = prompt("type in your age");

// if (age < 13) {
//   console.log("child");
// } else if (age >= 13 && age <= 19) {
//   console.log("teenager");
// } else {
//   console.log("adult");
// }

//assignment1
// const password = prompt("type in a password")
//check if the password typed is up tp 8 characters

// const password = prompt("type in a password")

// if (password.length >= 8) {
//     console.log("password is at least 8 characters long")
// } else {
//     console.log("password is not up to 8 characters")
// }

//assignment 2
//modify the above code to handle errors. if they type in a negative number or a string, we tell them "invalid response"

// if (age > 0 && age < 13) {
//     console.log("child")
// } else if (age >= 13 && age <= 19) {
//     console.log("teenager")
// } else if (age > 19) {
//     console.log("adult")
// } else {
//     console.log("invalid response")
// }

//assignment 3
//prompt user for birthyear and tell them if they are a millennial or not (between 1981 and 1996)

// // const year = prompt("type in your birthyear")
// if (year >= 1981 && year <= 1996) {
//     console.log("You are a millennial")
// } else {
//     console.log("You are not a millennial")
// }

//classwork
//prompt the user for the time .
// 0 - 11 am => good morning
// 12pm - 5pm => good afternoon
// 6pm - 11pm => good evening

// const time = prompt("What is the time?")

// if (time < 12) {
//     console.log("good morning")
// } else if (time < 18) {
//     console.log("good afternoon")
// } else if (time < 23) {
//     console.log("good evening")
// } else {
//     console.log("enter a valid time input")
// }

//classwork
//prompt your user for a score and log a grade for them
// 70 - 100 => A
// 60 - 69 => B
// 50 - 59 => C
// 45 - 49 => D
// 0 - 44 => F

// const score = prompt("please enter a score")

// if (score >= 70 && score < 100) {
//     console.log("A")
// }
// else if (score >= 60 && score < 70) {
//     console.log("B")
// } else if (score >= 50 && score < 60) {
//     console.log("C")
// } else if (score >= 45 && score < 50) {
//     console.log("D")
// } else if (score > 0 && score < 45) {
//     console.log("F")
// } else {
//     console.log("invalid")
// }

//class work
//hello,today,is,tuesday
// const response = prompt("type in comma seperated words")
// const res_arr = response.split(",")
// const length = res_arr.length

// console.log(`You typed in ${length} number of words`)

//OR

// let x = 6
// let y = 7
// let z = 8

// console.log(x < y || x < z); // true
// console.log(x < y || x > z); // true

// console.log(x < y || y < z || x > z); // true
// console.log(x > y || y > z); //false

// classwork

// if the number is divisible by 3 AND 5 => number is divisible by BOTH 3 and 5
// if the number is divisble by 3 OR 5 => number is divisible by 3 or 5
// if number is not divisible by 3 or 5 =>  number is not divisible by 3 or 5
// const num = prompt("type in a number");

// if (num % 5 == 0 && num % 3 == 0) {
//   console.log("Number is divisible by both 3 and 5");
// } else if (num % 5 == 0 || num % 3 == 0) {
//   console.log("Number is divisible by 3 or 5");
// } else {
//   console.log("Number is neither divisible by 3 or 5");
// }

//FUNCTIONS

function sum(a, b) {
  return a + b;
}

// sum(3, 5)
// sum(4, 5)
// sum(3, 9)
// sum(123, 5)

function sub(a, b) {
  return a - b;
}

// // sub(4, 3)

// function square(a) {
//     console.log(a * a)
//     console.log(a ** 2)
// }

// square(5)

// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// greet("Peace")

function introduceYourself(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

// introduceYourself("Fulfilled", 27);

//assignment
function max(a, b) {
  if (a > b) {
    console.log(`${a} is larger than ${b}`);
  } else {
    console.log(`${b} is larger than ${a}`);
  }
}

// max(23, 20)

// function isEven(num){
//     //tell you if its odd or even

// }
// isEven(2)  // 2 is even
// isEven(5)  // 5 is odd

// function numWords(sentence){
//     const arr = sentence.split(" ")
//     const num = arr.length;
//     console.log(`There are ${num} words in this sentence`)
// }

// numWords("today is a good day to code") // 7 words in this sentence
// numWords("today is a good day") // 7 words in this sentence
// numWords("good day to code") // 7 words in this sentence

//RETURN VALUE OF FUNCTIONS
function areaOfCircle(r) {
  const pi = 3.142;

  return pi * r * r;
}
// const value = areaOfCircle(5);
// console.log(value);
// const final = value + 5;
// console.log(final);

function bmiCalculator(weight, height) {
  // less than 18.5 => underweight
  // between 18.5 and 24.9 => normal weight
  // anything else => overweight
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    // console.log("underweight");
    return "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    // console.log("normal weight");
    return "normal weight";
  } else {
    // console.log("overweight");
    return "overweight";
  }
}

// const response = bmiCalculator(100, 2)
// console.log(response)

// console.log(calculator(sub, 4, 6))

// // const calculator = function (fn, a, b) {
// //     return fn(a, b)
// // }

// function calculator(fn, a, b){
//     return fn(a, b)
// }

//EXPLAIN HOISTING

//HOISTING

// greet("Edison")

// function greet(name) {
//   console.log(`Hello ${name}`);
// }
// along the line it can get very messy in your code when you have a lot of functions
// console.log(x);
// const x = 7;

//SOLUTION TO HOISTING
const greet = function (name) {
  console.log(`hello, ${name}`);
};
// greet("edison");

//SCOPE
//EXAMPLE 1
// let x = 10

// function myFunc() {
//     let y = 5;
//     console.log(x + y)
// }

// console.log(x)
// console.log(y)

//15
//10
//y is undefined

//EXAMPLE 2

// let x = 10
// function myFunc (){
//     x = 5
//     console.log(x)
// }
// console.log(x)
// myFunc()
// console.log(x)

// //10
//5
//5

/*
//EXAMPLE 3
let x = 10
function myFunct (){
    let x = 5 // (note: let x = 5, was declared here)
    console.log(x)
}
console.log(x) // 10
myFunct () // 5
console.log(x) // 10 (note: we got 10 here because let x = 5 was declared again inside the function)
*/
//10
//5
//10

/*
//SCOPE EXAMPLE 4
let x = 10
function myFunction (){
    let x = 5
    function myInnerFunction(){
        console.log(x)
    }
    myInnerFunction()
}
console.log(x) // 10
myFunction() // 10

classwork
function areaOfTriangle(base, height){
    let area = (0.5* base * height);
    return area
}
console.log(areaOfTriangle(7,8)) // 28
*/

/*
function Farenheit(celcius){
    const area = (celcius*9/5)+32
    return area
}
console.log(Farenheit(37)) // 98.6
*/
//TEACH THEM ABOUT ARRAYS AND COME BACK TO THIS
/*


//DEFAULT PARAMETER
/*
function add5 (x, y = 5){
    return x + y
}
console.log(add5(5))// 10 
console.log(add(5,10)) //15
console.log(add5(15))// 20
*/

/*
function multiplyBy3 (x = 5, y){
    return x * y
}
console.log(multiplyBy3(undefined,5)) // 25 
console.log(multiplyBy3(5,10)) // 50
console.log(multiplyBy3(undefined,20))// 100
*/

/*
function multiplyBy3 (x, y = 3){
    return x * y
}
console.log(multiplyBy3(5)) // 15 
console.log(multiplyBy3(5,10)) // 50
console.log(multiplyBy3(20))// 60
*/

/*
function greet(name = "stranger"){
    console.log(`hello ${name}`)
}
greet() // hello stranger
greet("") // hello
*/

/*
//CLASS WORK
function concatenate(input1 = "hello", input2 = "default"){
    console.log(`${input1} ${input2}`)

}
concatenate('hi') //hi default
concatenate("welcome") //welcome default
concatenate("hello","world") //hello world
concatenate("goodday","Jim") //goodday Jim
concatenate() // hello default
*/

// www.https://mathisfun.com/leap-years

// console.log("hello")

function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        console.log("leap year");
      } else {
        console.log("not leap year");
      }
    } else {
      console.log("leap year");
    }
  } else {
    console.log("not leap year");
  }
}

// ARRAYS

// arr[2] = "hello"
// console.log(arr)
// const arr = ["a", "b", "c", "d", "e", 1, 2, 3,]

// console.log(arr[arr.length - 1])
//METHODS
//push

// arr.push("hello")
// console.log(arr)

//unshift
// arr.unshift("today")
// console.log(arr)

//slice
// console.log(arr.slice(1, 7)) // "b", "c","d", "e", 1,2

// console.log(arr.slice(3, 5)) // "d", "e"

// console.log(arr.slice()) // returns a copy of the array

// console.log(arr.slice(-1))

// console.log(arr.slice(-5, -1))

//EXAMPLE ON RANDOM NUMBER
// const arr = ["john","mary","cynthia"]

// function whoIsPaying(arr){

//     const n = arr.length
//     let who = Math.random() * n // gives any number lesser than value of n
//     who = Math.floor(who) //  convert number to a whole number
//     return `${arr[who]} is paying for dinner`
// }
// //console.log(arr[0]) // john
// //console.log(Math.floor(Math.random()*4)) // any number lesser than 4
// console.log(whoIsPaying(arr))

// classwork

// create a dice
// */

//concat
const arr2 = ["p", 1, 2, 3, 4, 5, 6, "a", "b", 24];
// console.log(arr.concat(arr2))

// const first = arr2.slice(0, 1)
// console.log(first)

// const last = arr2.slice(-1)
// console.log(last)

// console.log(first.concat(last))
// // [1, "b"]

//splice

const arr3 = ["a", "b", "c", "d", "e"];

// console.log(arr3.splice(0, 3))

// console.log(arr3)

//classwork
/**
 * 1. prompt them for the index to start from
 * 2. prompt them for how many elements to remove starting from that index
 * 3. log the removed items
 */
// const fruits = ["mango", "apple", "orange", "banana", "grape"]

// const index = prompt("what index?")
// const howMany = prompt("delete how many?")

// console.log(fruits.splice(index, howMany))
// console.log(arr3);
// arr3.splice(2, 3, "hello");

// console.log(arr3);
// // console.log(arr3)

// //POP
// const arr4 = ["a", "b", "c", "d", "e"];

// console.log(arr4.pop());

//SORT

// const fruits = ["mango", "apple", "orange", "peach"]

// console.log(fruits.sort())

// const fruits2 = ["mango", "apple", "orange", "WATERMELON", "GRAPE", "GUAVA"]
// console.log(fruits2.sort())

// const nums = [22, 3, 5, 1, 18, 7]
//ascending
// console.log(nums.sort((a, b) => a - b))
// [3, 22, 5, 1, 18, 7]
// [3, 5, 22, 1, 18, 7]
// [3, 5, 1, 22, 18, 7]
// [3, 5, 1, 18, 22, 7]
// [3, 5, 1, 18, 7, 22]
// [3, 1, 5, 18, 7, 22]
// [1, 3, 5, 18, 7, 22]
// [1, 3, 5, 7, 18, 22]

// console.log(nums.sort((a, b) => b - a))
// //descending
// [22, 5, 3, 1, 18, 7]
// [22, 5, 3, 18, 1, 7]
// [22, 5, 18, 3, 1, 7]
// [22, 18, 5, 3, 1, 7]
// [22, 18, 5, 3, 7, 1]
// [22, 18, 5, 7, 3, 1]
// [22, 18, 7, 5, 3, 1]

//JOIN
// const str5 = "hello,world,today,is,wednesday"
// const arr = str5.split(",")
// console.log(arr.join("&"))

// const fruits = ["mango", "apple", "orange", "peach"]

// console.log("[" + fruits.join(" ") + "]")
// console.log(`[${fruits.join(" ")}]`)
// [mango apple orange peach]

// hello,today,is,wednesday => hello&today&is&wednesday

// const response = prompt("type in comma seperated words")
// const res_arr = response.split(",")
// const answer = res_arr.join("&")
// console.log(answer)

const arr7 = [2, 5, 14, 9, 8, 5, 65, 77, 22];
const words = ["hello", "hi", "how"];
// const sep = prompt("type in a seperator")
// console.log(arr7.sort((a, b)=>a-b).join(sep))
// 2-5-5-8-9-14-22-65-77

//REVERSE

// console.log(arr7.reverse())

// const response = prompt("type in a word"); // civic rotor radar level kayak madam refer rotator

("civic is a palindrome");
("hello is not a palindrome");

//ASSIGNMENT
//"the quick brown fox jumps over the lazy dog"  => "dog lazy the over jumps fox brown quick the"

// console.log("the quick brown fox jumps over the lazy dog".split(" ").reverse().join(" "))

//MAP

//example 1
// const numbers = [3, 56, 2, 48, 5];

// const double = numbers.map(function (num) {
//   return num * 2;
// });

//example 2
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((num) => num ** 2);
// console.log(squares); // [1, 4, 9, 16, 25]

// example 3
// const numbers = [1, 2, 3, 4, 5];
// const negatives = numbers.map((num) => -num);
// console.log(negatives); // [-1, -2, -3, -4, -5]

//classwork 1

// const addedH = numbers.map(function (num) {
//   return num + "h";
// });

// console.log(addedH);

// example 4
// const strings = ['hello', 'world', 'foo', 'bar'];
// const lengths = strings.map(str => str.length);
// console.log(lengths); // [5, 5, 3, 3]

//example 5
// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
// ];
// const names = people.map((person) => person.name);
// console.log(names); // ['Alice', 'Bob', 'Charlie']

// example 6
// const strings = ["hello", "world", "foo", "bar"];
// const uppercased = strings.map((str) => str.toUpperCase());
// console.log(uppercased); // ['HELLO', 'WORLD', 'FOO', 'BAR']

//example 7
// const strings = ["hello", "world", "foo", "bar"];
// const firstChars = strings.map((str) => str[0]);
// console.log(firstChars); // ['h', 'w', 'f', 'b']

// const reversed = strings.map(function (str) {
//   return str.split("").reverse().join("");
// });

// console.log(reversed);

//example 7
// const numbers = [1, 2, 3, 4, 5];
// const parity = numbers.map((num) => (num % 2 === 0 ? "even" : "odd"));
// console.log(parity); // ['odd', 'even', 'odd', 'even', 'odd']

//FILTER
//returns a new array by keeping only the items that return true

//example 1
// const numbers = [3, 56, 2, 48, 5];

// const greaterThan10 = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log(greaterThan10);

//example 2
// const lessThan10 = numbers.filter(function (num) {
//   return num < 10;
// });

//example 3
// const numbers = [10, 20, 30, 40, 50];
// const filteredNumbers = numbers.filter(num => num >= 30);
// console.log(filteredNumbers); // Output: [30, 40, 50]

//example 4
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6, 8]

//example 5
// const words = ["apple", "banana", "cherry", "orange", "kiwi"];
// const filteredWords = words.filter((word) => word.includes("a"));
// console.log(filteredWords); // ["apple", "banana", "orange"]

//example 6
// const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// const filteredNames = names.filter(name => name[0] !== 'D');
// console.log(filteredNames); // Output: ['Alice', 'Bob', 'Charlie', 'Eve']

//example 7
// const people = [
//   { name: "John", age: 25 },
//   { name: "Mary", age: 17 },
//   { name: "Tom", age: 32 },
//   { name: "Kate", age: 15 },
// ];
// const adults = people.filter((person) => person.age >= 18);
// console.log(adults); // [{ name: "John", age: 25 }, { name: "Tom", age: 32 }]

//DESTRUCTURING
//a technique of unpacking the content of a an array or object

//ARRAYS
//example 1
// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;
// // console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

//OBJECTS
//example 1
const user = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
};

const { firstName, lastName, email } = user;
console.log(firstName);
console.log(lastName);
console.log(email);

//example 2
// const animals = [
//   { name: "cat", sound: "meow" },
//   { name: "dog", sound: "woof" },
// ];

// const [cat, dog] = animals;
// // console.log(cat);
// // console.log(dog);

// const { name, sound } = cat;
// console.log(name); // cat
// console.log(sound); // meow

// show that renaming the variable can be important

// const { name: dogName, sound: dogSound } = dog;

//Nested objects
const animals = [
  { name: "cat", sound: "meow", foodRequirements: { food: 2, water: 3 } },
  { name: "dog", sound: "woof" },
];

//Omitting a value
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(fourth); // 4

//SPREAD OPERATOR

const citrus = ["Lime", "Lemon", "Orange"];

// const fruits = ["Apple", "Banana", "Coconut"];

// //boring way of doing it

// for (let i = 0; i < citrus.length; i++) {
//   fruits.push(citrus[i]);
// }

// console.log(fruits)

// much better way
// const fruits = ["Apple", "Banana", "Coconut", ...citrus];

// console.log(fruits)

// const str = "hello"

// console.log([...str])

//FOR LOOPS

/**
 * for (initialization ; condition ; operation){
 *      //code
 * }
 */

const str5 = "Hello World";

for (let i = 0; i < str5.length; i++) {
  // console.log(str5[i])
}

for (let i = 0; i <= 10; i++) {
  // console.log(i)
}

//classwork
for (let i = 20; i >= 0; i--) {
  // console.log(i)
}

let word4 = "javascript";
let letter = "a";
// let newWord = ""
let count = 0;

for (let i = 0; i < word4.length; i++) {
  if (letter == word4[i]) {
    count++;
  }
}
// console.log(count)

let total = 0;
for (let i = 0; i <= 10; i++) {
  total += i; //total = total + i
}
// console.log(total)

// const arr = [3, 6, 7, 8, 9, 10]
// let total2 = 0
// for (let i = 0; i < arr.length; i++) {
//     total2 += arr[i]
//     // console.log(total2)
// }
// console.log(total2)

//ASSIGNMENT 1
//1 x 2 = 2
//2 x 2 = 4
//3 x 2 = 6
//4 x 2 = 8
//5 x 2 = 10
//6 x 2 = 12
//7 x 2 = 14

//ASSIGNMENT 2
// "javascript"  => "jvscript"
// "hello" => "heo"

// let word = "javascript"
// let letterToRemove = "a"
// let newWord = ""

// for (let i = 1; i < 8; i++) {
//     console.log(`${i} x 2 = ${i * 2}`)
// }

// for (let i = 0; i < word.length; i++) {
//     console.log(`letter at index ${i} is ${word[i]}`)
//     if (word[i] != letterToRemove) {
//         newWord += word[i] // newWord = newWord + word[i]
//     }
//     console.log(`new word is => ${newWord}`)
// }

// console.log(newWord)

// let numbers = [2, 6, 7, 8, 10, 3, 5];
let total3 = 0;
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`before => ${total3}`)
//     if (numbers[i] % 2 === 0) {
//         total3 += numbers[i]
//     }
//     console.log(`after => ${total3}`)
// }

//WHILE LOOP

// let i = 0
// while(condition){

//  operation
// }

const name2 = "John Doe";

// let z = 0;
// while (z < name2.length) {
//     console.log(name2[z])

//     z++
// }

// let total4 = 0
// while (z < numbers.length) {
//     if (numbers[z] % 2 == 0) {
//         total4 += numbers[z]
//     }
//     z++
// }
// console.log(total4)

// let d = 20
// while (d >= 0) {
//     console.log(d)
//     d--
// }

// let i = 5

// while (i >= 0) {
//     if (i == 0) {
//         console.log("No cars left")
//     } else if (i == 1) {
//         console.log(`${i} car left in the garage`)
//     } else {
//         console.log(`${i} cars left in the garage`)
//     }
//     i--
// }

// const arr = [3, 5, 7, 2, 7, 4]

// let i = 0
// while (i < arr.length) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//         break
//     }
//     i++
// }

//OBJECTS

// const obj1 = {
//   name: "Edison",
//   age: 30,
//   occupation: "Instructor",

//   introduceYourself: function () {
//     // console.log(this)
//     return `My name is ${this.name}. I am ${this.age} years old. I am an ${this.occupation}`;
//   },
// };

// // console.log(obj1.name)
// // console.log(obj1.introduceYourself())

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2017,
//   color: "red",
//   started: false,
//   speed: 0,
//   distCovered: 0,
//   start: function () {
//     console.log("starting car...");
//     this.started = true;
//   },
//   stop: function () {
//     if (this.started == true) {
//       console.log("stopping car...");
//       this.started = false;
//     } else {
//       console.log("Car not started");
//     }
//   },
//   //classwork
//   accelerate: function () {
//     if (this.started == true) {
//       this.speed += 5;
//       this.distCovered += 100;
//       console.log(`${this.make} going at ${this.speed}km/h`);
//       console.log(`distance covered is ${this.distCovered}m`);
//     } else {
//       console.log("Car not started");
//     }
//   },
//   //classwork
//   brake: function () {
//     if (this.started == true) {
//       this.speed -= 3;
//       console.log(`${this.make} going at ${this.speed}km/h`);
//     } else {
//       console.log("Car not started");
//     }
//   },
//   //assignment
//   reverse: function () {},
// };
// // }
// // console.log(car)
// // car.start()
// // // car.stop()

// // car.accelerate()// Toyota moving at 5km/h
// // //Distance covered is 100m

// // car.accelerate()// Toyota moving at 10km/h
// // //Distance covered is 200m
// // car.accelerate()// Toyota moving at 15km/h
// // //Distance covered is 300m

// // car.brake()  //Toyota going at 12km/h
// // car.brake()  //Toyota going at 9km/h
// // car.brake()  //Toyota going at 6km/h

// const employee = {
//   name: "John",
//   title: "Sales Manager",
//   salary: 100000,
//   annualSalary: function () {
//     return this.salary * 12;
//   },
// };

// //MODIFYING OBJECTS
// console.log(employee.name); //John
// console.log(employee.title); //Sales manager

// employee.name = "Edison";
// employee.salary = 20000;
// console.log(employee);

// delete employee.salary;
// console.log(employee);

// const account = {
//   name: "Peace",
//   accountBalance: 2000000,
//   deposit: function (amt) {
//     this.accountBalance += amt;
//     console.log(
//       `${this.name} deposited $${amt}. Current Balance: $${this.accountBalance}`
//     );
//   },
//   withdraw: function (amt) {
//     // if (this.accountBalance != 0 && amt <= this.accountBalance) {
//     //     this.accountBalance -= amt;
//     //     console.log(`${this.name} withdrew $${amt}. Current Balance: $${this.accountBalance}`)
//     // }else{
//     //     console.log("Insufficient funds")
//     // }

//     if (this.accountBalance == 0) {
//       console.log("No money in your account");
//     } else if (amt > this.accountBalance) {
//       console.log("Insufficient funds");
//     } else {
//       this.accountBalance -= amt;
//       console.log(
//         `${this.name} withdrew $${amt}. Current Balance: $${this.accountBalance}`
//       );
//     }
//   },
// };

// account.deposit(200000); //Peace deposited $200000. Current balance: $2200000
// account.deposit(50000); //Peace deposited $50000. Current balance: $2250000

// const person = {
//   name: "Edison",
//   relatives: [
//     { name: "Ada", role: "mother" },
//     { name: "Edison", role: "father" },
//     { name: "Brian", role: "brother" },
//   ],
//   previousJobs: ["Sales", "hr", "receptionist"],
//   age: 40,
//   addRelative: function (name, role) {
//     const relative = {
//       name: name,
//       role: role,
//     };
//     this.relatives.push(relative);
//   },
//   //assignment
//   addJob: function (name) {},
// };

// console.log(person);
// person.addRelative("emeka", "cousin");
// console.log(person);
// // person.addJob("pilot")
// person.previousJobs[2] = "attendant";
// console.log(person);

//ARRAYS AND OBJECTS

// 1. const people = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Bob", age: 45 },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

//2. const people = [  { name: 'John', age: 25 },  { name: 'Jane', age: 30 },  { name: 'Bob', age: 45 },];

// for (let i = 0; i < people.length; i++) {
//   people[i].hasJob = true;
// }

// console.log(people);

//classwork
//3. const people = [
//   { name: 'John', age: 25, hasJob: true },
//   { name: 'Jane', age: 30, hasJob: false },
//   { name: 'Bob', age: 45, hasJob: true },
// ];

// const employedPeople = [];

// for (let i = 0; i < people.length; i++) {
//   if (people[i].hasJob) {
//     employedPeople.push(people[i]);
//   }
// }

// console.log(employedPeople);

// 4. const items = [
//   { name: "Item 1", price: 10 },
//   { name: "Item 2", price: 20 },
//   { name: "Item 3", price: 30 },
// ];

// let totalPrice = 0;

// for (let i = 0; i < items.length; i++) {
//   totalPrice += items[i].price;
// }

// console.log(totalPrice);

//assignment
// const students = [
//   { name: "Alice", grade: 90 },
//   { name: "Bob", grade: 85 },
//   { name: "Charlie", grade: 80 },
// ];

// function calculateAverageGrade(students) {
//   let sum = 0;
//   for (let i = 0; i < students.length; i++) {
//     sum += students[i].grade;
//   }
//   return sum / students.length;
// }

// console.log(calculateAverageGrade(students)); // Output: 85

//5 const people = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 },
// ];

// function getNamesOfAdults(people) {
//   let adultNames = [];
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age > 18) {
//       adultNames.push(people[i].name);
//     }
//   }
//   return adultNames;
// }

// console.log(getNamesOfAdults(people)); // Output: ["Alice", "Charlie"]

//classwork
// const students = [
//   { name: "Alice", age: 18, grade: 80 },
//   { name: "Bob", age: 19, grade: 60 },
//   { name: "Charlie", age: 20, grade: 90 },
//   { name: "David", age: 18, grade: 65 },
// ];

// function getFailingStudents(students) {
//   const failingStudents = [];
//   for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     if (student.grade < 70) {
//       failingStudents.push(student.name);
//     }
//   }
//   return failingStudents;
// }

// console.log(getFailingStudents(students)); // Output: ["Bob", "David"]

//classwork
// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2010 },
//   { make: "Honda", model: "Accord", year: 2015 },
//   { make: "Tesla", model: "Model S", year: 2016 },
//   { make: "Ford", model: "Mustang", year: 2009 }
// ];

// function getOldTcars(cars) {
//   const oldTcars = [];
//   for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     if (car.year <= 2011 && car.make[0] === "T") {
//       oldTcars.push(car);
//     }
//   }
//   return oldTcars;
// }

// console.log(getOldTcars(cars))

//assignment
// const movieLibrary = {
//   collections: [
//     {
//       name: "Action",
//       movies: [
//         { name: "Black Panther", releaseYear: 2022 },
//         { name: "Thor", releaseYear: 2019 },
//       ],
//     },
//     {
//       name: "Series",
//       movies: [
//         { name: "Euphoria", releaseYear: 2020 },
//         { name: "Prison Break", releaseYear: 2005 },
//       ],
//     },
//   ],
//   //assignment
//   addCollection: function (name) {},
//   //assignment
//   addMovie: function (name, releaseYear, collectionName) {},
// };

// console.log(movieLibrary);

// movieLibrary.addCollection("Horror");
// console.log(movieLibrary.collections);
// movieLibrary.addMovie("Ant man", 2020, "Action");

//OOP (Object Oriented Programming)
// Object oriented programming is a programming style that is centered around objects
//In OOP , we combine a group of related variables and functions in a unit. This using is called an object

// const person = {
//     name: "John",
//     age: 30,
//     gender: "male"
// }
// const mary = {

// }

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;

    //classwork
    this.gender = gender;
  }

  greet() {
    console.log(`Hello, nice to meet you!`);
  }
  introduceYourself() {
    return `Hello my name is ${this.name}. I am ${this.age} years old. I am a ${this.gender}`;
  }

  //classwork
  ageInFiveYears() {
    return `In 5 years, I will be ${this.age + 5} years old`;
  }
}

const john = new Person("John", 30, "Male");

console.log(john.ageInFiveYears()); // In 5 years I will be 35 years old
// const mary = new Person("Mary", 22, "Female")
// console.log(john)
// console.log(john.introduceYourself())
// console.log(mary)
// console.log(mary.introduceYourself())

// console.log(john.introduceYourself())
// console.log(mary.introduceYourself())

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle1 = new Rectangle(3, 4);

class Car {
  constructor(make, year) {
    this.make = make;
    this.year = year;
    this.started = false;
    this.kmCovered = 0;
    this.speed = 0;
  }

  displayInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }

  start() {
    this.started = true;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}

const car1 = new Car("Toyota", 2020);
// console.log(car1)

// car1.accelerate() //Toyota going at 10km/h
// car1.accelerate() //Toyota going at 20km/h
// car1.brake() //Toyota going at 15km/h

// console.log(car1.displayInfo())
// const car2 = new Car("Mercedes", 2005)
// console.log(car2)
// console.log(car2.displayInfo())

class TodoList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    console.log(`"${item}" has been added to the list.`);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index === -1) {
      console.log(`"${item}" is not in the list.`);
    } else {
      this.items.splice(index, 1);
      console.log(`"${item}" has been removed from the list.`);
    }
  }

  showItems() {
    console.log(`Todo List: ${this.items.join(", ")}`);
  }
}

// Creating a new todo list
const todoList1 = new TodoList();

// Using the methods
todoList1.addItem("Buy groceries"); // Output: "Buy groceries" has been added to the list.
todoList1.addItem("Do laundry"); // Output: "Do laundry" has been added to the list.
todoList1.showItems(); // Output: Todo List: Buy groceries, Do laundry
todoList1.removeItem("Go to gym"); // Output: "Go to gym" is not in the list.
todoList1.removeItem("Do laundry"); // Output: "Do laundry" has been removed from the list.

class BankAccount {
  #pin;

  constructor(name, balance, pin) {
    this.name = name;
    this.balance = balance;
    this.#pin = pin;
  }

  deposit(amount) {
    this.balance += amount;
    return `${this.name} deposited $${amount}. Current Balance: $${this.balance}`;
  }
  withdraw(amount) {
    this.balance -= amount;
    return `${this.name} withdrew $${amount}. Current Balance: $${this.balance} `;
  }

  transfer(amount, accountName) {
    this.balance -= amount;
    accountName.balance += amount;
  }
}

// const jonathan = new BankAccount("Jonathan", 4000)
// console.log(jonathan.deposit(3000))
// console.log(jonathan.deposit(3000))

const mary = new BankAccount("Mary", 5000);
const joseph = new BankAccount("Joseph", 4000);
// console.log(joseph)
// jonathan.transfer(2000, mary) //Jonathan transferred $2000 to Mary. Jonathan's current balance: $8000. Mary's current balance: $7000
// jonathan.transfer(4000, joseph)
// // console.log(jonathan)
// // console.log(mary)
// // console.log(joseph)

// mary.transfer(3000, jonathan)

//INHERITANCE

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    return `My name is ${this.name}`;
  }

  sayAge() {
    return `I am ${this.age} years old.`;
  }
}

const parent1 = new Parent("Austin", 35);

// console.log(parent1)
console.log(parent1.sayName());

class Child extends Parent {
  constructor(name, age, friends) {
    super(name, age);
    this.friends = friends;
  }

  listFriends() {
    this.friends.forEach(function (item) {
      console.log(item);
    });
  }

  sayName() {
    return `${super.sayName()}. I have ${this.friends.length} friends`;
  }
}

const child = new Child("Feyi", 13, ["titi", "mary", "idowu"]);

// console.log(child.sayName());
// child.listFriends()

class ElectricCar extends Car {
  constructor(make, year, batteryLvl, model) {
    super(make, year);
    this.batteryLvl = batteryLvl;
    this.model = model;
  }

  charge() {
    this.batteryLvl += 8;
    return `Battery charged to ${this.batteryLvl}`;
  }

  accelerate() {}
}

const electricCar1 = new ElectricCar("Tesla", 2020, 70, "Model X");
console.log(electricCar1.accelerate()); //Tesla going at 10km/h and battery level at 65%
