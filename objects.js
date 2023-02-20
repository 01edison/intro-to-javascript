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


console.log(str1[0])  // H
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

//SPLIT
const arr1 = str4.split(" ");
// console.log(arr1)

// const arr2 = str5.split(",")
// console.log(arr2.length)

//charAt
console.log(str4.charAt(1));

//indexOf
console.log(str4.indexOf("T"));
console.log(str4.indexOf("good"));

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

console.log(x < y && x < z); // true
console.log(x < y && x > z); //false

console.log(x < y && x < z && y > z); //false

//classwork
const age = prompt("type in your age");

if (age < 13) {
  console.log("child");
} else if (age >= 13 && age <= 19) {
  console.log("teenager");
} else {
  console.log("adult");
}


//assignment1
// const password = prompt("type in a password")
//check if the password typed is up tp 8 characters

//assignment 2
//modify the above code to handle errors. if they type in a negative number or a string, we tell them "invalid response"

//assignment 3
//prompt user for birthyear and tell them if they are a millennial or not (between 1981 and 1996)



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

/**
 * 1. prompt them for the index to start from
 * 2. prompt them for how many elements to remove starting from that index
 * 3. log the removed items
 */
// const fruits = ["mango", "apple", "orange", "banana", "grape"]

// const index = prompt("what index?")
// const howMany = prompt("delete how many?")

// console.log(fruits.splice(index, howMany))
console.log(arr3);
arr3.splice(2, 3, "hello");

console.log(arr3);
// console.log(arr3)

//POP
const arr4 = ["a", "b", "c", "d", "e"];

console.log(arr4.pop());

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

const response = prompt("type in a word"); // civic rotor radar level kayak madam refer rotator

("civic is a palindrome");
("hello is not a palindrome");

//ASSIGNMENT
//"the quick brown fox jumps over the lazy dog"  => "dog lazy the over jumps fox brown quick the"

// console.log("the quick brown fox jumps over the lazy dog".split(" ").reverse().join(" "))

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

function areaOfCircle(r) {
  const pi = 3.142;

  console.log(pi * r * r);
}

// const area = areaOfCircle(7)
// console.log(area)
// console.log(area + 7)

function bmiCalculator(weight, height) {
  //less than 18.5 => underweight
  // between 18.5 and 24.9 => normal weight
  // anything else => overweight

  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else {
    return "Overweight";
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

//SCOPE
//EXAMPLE 1
// let x = 10

// function myFunc() {
//     let y = 5;
//     console.log(x + y)
// }

// console.log(x)
// console.log(y)

//EXAMPLE 2

// let x = 10
// function myFunc (){
//     x = 5
//     console.log(x)
// }
// console.log(x)
// myFunc()
// console.log(x)

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
*/

/*
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

/*
//EXAMPLE ON RANDOM NUMBER 
const arr = ["john","mary","cynthia"]

function whoIsPaying(arr){

    const n = arr.length
    let who = Math.random() * n // gives any number lesser than value of n
    who = Math.floor(who) //  convert number to a whole number
    return `${arr[who]} is paying for dinner`
}
//console.log(arr[0]) // john
//console.log(Math.floor(Math.random()*4)) // any number lesser than 4
console.log(whoIsPaying(arr))
*/

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
concatenate() // hello defaulf
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


let numbers = [2, 6, 7, 8, 10, 3, 5]
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

const name2 = "John Doe"

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

const obj1 = {
    name: "Edison",
    age: 30,
    occupation: "Instructor",

    introduceYourself: function () {
        // console.log(this)
        return `My name is ${this.name}. I am ${this.age} years old. I am an ${this.occupation}`
    }
}

// console.log(obj1.name)
// console.log(obj1.introduceYourself())

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2017,
    color: "red",
    started: false,
    speed: 0,
    distCovered: 0,
    start: function () {
        console.log("starting car...")
        this.started = true;
    },
    stop: function () {
        if (this.started == true) {
            console.log("stopping car...")
            this.started = false
        } else {
            console.log("Car not started")
        }
    },
    //classwork
    accelerate: function () {
        if (this.started == true) {
            this.speed += 5;
            this.distCovered += 100
            console.log(`${this.make} going at ${this.speed}km/h`)
            console.log(`distance covered is ${this.distCovered}m`)
        } else {
            console.log("Car not started")
        }
    },
    //classwork
    brake: function () {
        if (this.started == true) {
            this.speed -= 3;
            console.log(`${this.make} going at ${this.speed}km/h`)
        } else {
            console.log("Car not started")
        }
    },
    //assignment
    reverse: function () {

    }
}
// }
// console.log(car)
// car.start()
// // car.stop()

// car.accelerate()// Toyota moving at 5km/h
// //Distance covered is 100m

// car.accelerate()// Toyota moving at 10km/h
// //Distance covered is 200m
// car.accelerate()// Toyota moving at 15km/h
// //Distance covered is 300m

// car.brake()  //Toyota going at 12km/h 
// car.brake()  //Toyota going at 9km/h  
// car.brake()  //Toyota going at 6km/h  


const employee = {
    name: "John",
    title: "Sales Manager",
    salary: 100000,
    annualSalary: function () {
        return this.salary * 12
    }
}

//MODIFYING OBJECTS
console.log(employee.name) //John
console.log(employee.title) //Sales manager

employee.name = "Edison"
employee.salary = 20000
console.log(employee)

delete employee.salary
console.log(employee)

const account = {
    name: "Peace",
    accountBalance: 2000000,
    deposit: function (amt) {
        this.accountBalance += amt;
        console.log(`${this.name} deposited $${amt}. Current Balance: $${this.accountBalance}`)
    },
    withdraw: function (amt) {
        // if (this.accountBalance != 0 && amt <= this.accountBalance) {
        //     this.accountBalance -= amt;
        //     console.log(`${this.name} withdrew $${amt}. Current Balance: $${this.accountBalance}`)
        // }else{
        //     console.log("Insufficient funds")
        // }

        if (this.accountBalance == 0) {
            console.log("No money in your account")
        } else if (amt > this.accountBalance) {
            console.log("Insufficient funds")
        } else {
            this.accountBalance -= amt;
            console.log(`${this.name} withdrew $${amt}. Current Balance: $${this.accountBalance}`)
        }
    }
}

account.deposit(200000) //Peace deposited $200000. Current balance: $2200000
account.deposit(50000) //Peace deposited $50000. Current balance: $2250000

const person = {
    name: "Edison",
    relatives: [
        { name: "Ada", role: "mother" },
        { name: "Edison", role: "father" },
        { name: "Brian", role: "brother" }
    ],
    previousJobs: ["Sales", "hr", "receptionist"],
    age: 40,
    addRelative: function (name, role) {
        const relative = {
            name: name,
            role: role
        }
        this.relatives.push(relative)
    },
    //assignment
    addJob: function (name) {

    }
}

console.log(person)
person.addRelative("emeka", "cousin")
console.log(person)
// person.addJob("pilot")
person.previousJobs[2] = "attendant"
console.log(person)


const movieLibrary = {
    collections: [
        {
            name: "Action",
            movies: [
                { name: "Black Panther", releaseYear: 2022 },
                { name: "Thor", releaseYear: 2019 }
            ]
        },
        {
            name: "Series",
            movies: [
                { name: "Euphoria", releaseYear: 2020 },
                { name: "Prison Break", releaseYear: 2005 }
            ]
        },

    ],
    //assignment
    addCollection: function(name){

    },
    //assignment
    addMovie: function(name, releaseYear, collectionName){

    }
}

console.log(movieLibrary)

movieLibrary.addCollection("Horror")
console.log(movieLibrary.collections)
movieLibrary.addMovie("Ant man", 2020, "Action")

