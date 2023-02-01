
let x = 5  // the "let" keyword allows you to create variables that you can re-assign values to

const y = 6 // the "const" keyword allow you to create variables that cannot be changed later

//ARITHMETIC OPERATORS
// + - * / % **
// const num = prompt("type in a number")
// if (num % 2 == 0) {
//     console.log("even")
// } else {
//     console.log("odd")
// }


//COMPARISON OPERATORS

// == != > < <= >=


//LOGICAL OPERATORS
// &&(AND) ||(OR) !(NOT)

// const age = prompt("type in your age")

// if (age < 13) {
//     console.log("child")
// } else if (age >= 13 && age < 20) {
//     console.log("teenager")
// } else {
//     console.log("adult")
// }

//AREA OF A CIRCLE
// const pi = 3.142;

// let r = 7;

// const area = pi* r**2;

// console.log(area)


// const response = prompt("type in a number");
// console.log(typeof response)
// console.log(response)
// const converted = Number(response)
// console.log(typeof converted)
// console.log(converted)

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


//STRINGS

const str = "hello there today is wednesday"

// const arr = ["a", "b", "c", 1, 2]

console.log(arr.length)
console.log(str.split(","))

// const sentence = prompt("type in a sentence")

// const sent_split = sentence.split(" ")

// const numWords = sent_split.length

const str1 = "hello"
const str2 = " world"
// console.log("this sentence has "+ numWords+" words in it")
// console.log(`this sentence has ${numWords} words in it`)

// console.log(str1.concat(str2).concat("javascript "))

const str3 = "javascript is the java of the java javascript is the java of the javajavascript is the java of the javajavascript is the java of the javajavascript is the java of the javajavascript is the java of the javajavascript is the java of the javajavascript is the java of the javajavascript is the java of the java"
// console.log(str3.replace("java", "python"))
// console.log(str3.substring(0, 70)+"....")

const str4 = "the sky is blue but was dark yesterday"
// console.log(str4.indexOf("but"))

// console.log(str4.charAt(1))

const sentence = prompt("type in a sentence")
const word = prompt("type in a word in that sentence")

const index = sentence.indexOf(word)

console.log(`The word ${word} is found at index ${index} in the string ${sentence}`)


// console.log(`the word \"boy\" is for a male being`)

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
const arr2 = ["p",1, 2, 3, 4, 5, 6, "a","b", 24]
// console.log(arr.concat(arr2))


// const first = arr2.slice(0, 1)
// console.log(first)

// const last = arr2.slice(-1)
// console.log(last)

// console.log(first.concat(last))
// // [1, "b"]

//splice

const arr3 = ["a", "b", "c", "d", "e"]

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
console.log(arr3)
arr3.splice(2, 3, "hello")

console.log(arr3)
// console.log(arr3)


//POP 
const arr4 = ["a", "b", "c", "d", "e"]

console.log(arr4.pop())


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

const arr7 = [2, 5, 14, 9, 8, 5, 65, 77, 22]
const words = ["hello", "hi","how"]
// const sep = prompt("type in a seperator")
// console.log(arr7.sort((a, b)=>a-b).join(sep))
// 2-5-5-8-9-14-22-65-77

//REVERSE

// console.log(arr7.reverse())

const response = prompt("type in a word") // civic rotor radar level kayak madam refer rotator

"civic is a palindrome"
"hello is not a palindrome"

//ASSIGNMENT
//"the quick brown fox jumps over the lazy dog"  => "dog lazy the over jumps fox brown quick the" 