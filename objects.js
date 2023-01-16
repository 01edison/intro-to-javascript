
let x = 5  // the "let" keyword allows you to create variables that you can re-assign values to

const y = 6 // the "const" keyword allow you to create variables that cannot be changed later

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

// const age = prompt("Type in a number")

// if (age < 13) {
//     console.log("pikin")
// } else if (age < 20) {
//     console.log("teenager")
//     return
// } else {
//     console.log("adult")
// }

function ageChecker(age) {
    if (age < 13) {
        console.log("pikin")
    } else if (age < 20) {
        console.log("teenager")
        return age;
    } else {
        console.log("adult")
    }
}

const age = ageChecker(13)
