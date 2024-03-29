//Nested Functions
let a = 10
function outer() {
    let b = 20
    function inner() {
        let c = 30
        console.log(a,b,c)
    }
    inner()
}
outer()

//Closures in Javascript
function outer () {
    let a = 10
    function inner () {
        a++
        console.log(a)
    }
    return inner
}
const fn = outer()
console.log(fn)
fn()
fn()

//Currying 
//Changing -> sum (2,3,5) to sum(2)(3)(5)
function sum (a,b,c) {
    return a+b+c
}

function curry(fn) {
    return function (a) {
        return function(b) {
            return function(c) {
                return fn (a,b,c)
            }
        }
    }
}

const curriedSum = curry(sum)

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)

//Types of binding in Javascript
function sayMyName (name) { //name is a parameter
    console.log(`My name is ${name}`) //name rendered dynamically
} 

sayMyName("Geoffrey") //Geoffrey is an argument in calling sayMyName function
sayMyName("Kimani")


//impilicit binding
const Person = {
    name: "Geofrey",
    sayMyName:function(name) {
        console.log(`My name is ${this.name}`)
    }
}
Person.sayMyName()


const name = "superman"
globalThis.name = "superman"

function sayMyName () {
    console.log(`my name is ${this.name}`)
}

sayMyName.call(Person) 

//The this key word
function Person (name) {
    this.name = name
}

//The new key word
const P1 = new Person ("Geoffrey")
const P2 = new Person("Kimani")

console.log(P1.name,P2.name)

sayMyName()


//Prototype
function Person (fName,lName) {
    this.fName = fName
    this.lName = lName
}

//inheriting methods using prototypes and functions
function SuperHero(fName, lName) {
    Person.call(this, fName,lName)
    this.isSuperHero = true
}

Person.prototype.getfullname = function() {
    return (`${this.fName} ${this.lName}`)
}

SuperHero.prototype.fightCrime = function () {
    console.log("Fighting crime")
} 

SuperHero.prototype = Object.create(Person.prototype)

const batman = new SuperHero("Bruce", "Wayne")

SuperHero.prototype.constructor = SuperHero

console.log(batman.getfullname())

//class syntactical sugar
class Person {
    constructor(fName,lName) {
        this.firstName = fName
        this.lastName = lName
    }
    sayMyName() {
        return (`${this.firstName} ${this.lastName}`)
    }
}

const person1 = new Person ("Geofrey", "Kimani")
console.log(person1.sayMyName())

class SuperHero extends Person {
    constructor (fName,lName) {
        super(fName,lName)
        this.isSuperHero = true
    }
    fightCrime() {
        console.log("fighting crime")
    }
}

const battman = new SuperHero ("Bruce", "Wayne")
console.log(battman.sayMyName())

//For loop
const str = "Geoffrey"
for (i=0;i<str.length;i++) {
    console.log(str.charAt(i))
}

const arr = ["G","e","o","f","f","r","e","y"]

for (i=0;i<arr.length;i++) {
    console.log(arr[i])
}

//for of loop
const stry = "Kimani"
for(const char of stry) {
    console.log(char)
}

const arry = ["G","e","o","f","f","r","e","y"]
for (item of arry) {
    console.log(item)
}

//creating an iterable object in JavaScript using Symbol.iterator. 

const obj = {
    [Symbol.iterator]: function() {
        let step = 0
        const iterator = {
            next: function() {
                step++
                if(step === 1) {
                    return {value:"Hello", done:false}
                } else if (step === 2) {
                    return {value:"world", done:false}
                }
                return {value:undefined, done:true}
            }
        }
        return iterator
    }
}

for (const word of obj) {
    console.log(word)
}

function normalFunction () {
    console.log("Hello")
    console.log("World")
}

normalFunction()
normalFunction()

//Generator function
function* generatorFunction() {
    yield "Hello"
    yield "world"
}

const generatorObject = generatorFunction()
 for(const i of generatorObject) {
    console.log(i)
 } 

//.map() method .filter refer to code with mosh on yt
const numbers = [1,-1,2,3]

const items = numbers
.filter(n=> n >= 0)
.map((n) => {
    return {value:n}
})

console.log(items)


//Applying logic to higher order functions

const radius = [3,1,2,4]

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius) {
    return 2 * Math.PI * radius
}

const calculate = function (radius, logic) {
    const output = []
    for (let i = 0;i<radius.length;i++) {
        output.push(logic(radius[i]))
    }
    return output
}

console.log (calculate(radius,circumference))
console.log (calculate(radius,area))

//.map() .reduce() and .filter()

const arryOfNums = [2,4,1,7,9]

//using functions to find maximum value in array
const findMax = function (arryOfNums) {
    let max = 0 
    for (let i = 0; i<arryOfNums.length;i++) {
        if (arryOfNums[i] > max) {
            max = arryOfNums[i]
        }
    }
    return max
}
console.log(findMax(arryOfNums))

//using reduce passing an accumulator as a parameter
const maximum = arr.reduce((max, curr) => {
    if (curr > max) {
        max = curr
    }
    return max
}, 0)

console.log(maximum)

//using functions to find sum in array
function findSum (arr) {
    let sum = 0
    for (i = 0;i<arr.length;i++) {
        sum = sum + arr[i]
    }
    return sum
}

console.log (findSum(arr))

//using .reduce to find total sum in array
const sum = arr.reduce((acc, curr) => {
    acc =  acc+curr
    return acc
}, 0)

console.log(sum)

//applying map filter and reduce (possible real world examples)
const users = [
    {firstName: "Geoffrey", lastName: "Kimani", age: 22},
    {firstName: "Elon", lastName: "Musk", age: 58},
    {firstName: "Jeff", lastName: "Bezos", age: 46},
    {firstName: "Benard", lastName: "Arnault", age: 22}
]

//First name of users with age less than 30 a .reduce solution
const fNameLess30 = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push (curr.firstName)
    }
    return acc
}, [])

console.log (fNameLess30)

//First name of users with age less than 30 a .filter .map solution
const firstNameLess30 = users.filter((user) => {
    return user.age < 30
}).map((user) => {
    return user.firstName
})

console.log(firstNameLess30)

const output = users.reduce ((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    }
    else {
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log (output)

const fullName = users.map((user) => {
   return `${user.firstName} ${user.lastName}`
})

console.log(fullName)

//Asynchronous Javascript callbacks promises async/await
// A callback function, in the context of programming, is a function that is passed as an argument to another function and is executed after the completion of a specific task or event. The primary purpose of a callback is to allow a program to continue executing while waiting for an asynchronous operation to finish.

// Here's a basic example in JavaScript:
function doSomethingAsync(callback) {
    setTimeout(() => {
        console.log("Async operation completed")
        callback()
    }, 1000)
}

function callBackFunction() {
    console.log("callback function executed")
}

doSomethingAsync(callBackFunction)

// James Q Quick YouTube
//setTimeout
setTimeout(() => {
    console.log("Waited for one second")
}, 1000)

//nested setTimeouts (call back hell)
setTimeout(() => {
    console.log('3')
    setTimeout(() => {
        console.log("2")
        setTimeout(() => {
            console.log("1")
        }, 1000)
    }, 1000)
}, 1000)

//creating a promise
const myPromise = new Promise ((resolve, reject) => {
    const rand = Math.floor(Math.random()* 2) 
    if (rand === 0) {
        resolve()
    } else {
        reject()
    }
})

myPromise
.then(() => console.log("Success"))
.catch(() => console.error("Something went wrong"))

//fs readFile with promises
const fs = require('fs');
fs.promises.readFile('./test.txt', {encoding:'utf-8'})
.then((data) => console.log(data))
.catch((err) => console.error(err))

//fetching apis with promises
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err))

//Load file with async/await
const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('./test.txt', {
            encoding: 'utf-8'
        })
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}
loadFile()

//fetching APIs with async/await with error handling
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}
fetchPokemon(2)

//Promise in Javascript | Namaste JavaScript

const cart2 = ["SHoes", "Pants", "Shirts"]

createOrder(cart2, function(orderId) {
    proceedToPayment(orderId)
})

createOrder(cart2).then ((orderId) => {
  return  proceedToPayment(orderId)
})

//using promise to fetch for APIs
// A promise is a container for a future value that is filled after asynchronous code returns that value.
const GITHUB_API = "https://api.github.com/users/Ge0frey"

const user = fetch(GITHUB_API)

console.log(user)

user.then((data) => {
    console.log(data)
})

//Creating a Promise, Chaining & Error Handling | Namaste Javascript
const cart = ['shirt','shoes','pants','Kurta']

createOrder(cart)
.then ((orderId) => {
    console.log(orderId)
    return orderId
})
.then((orderId) => {
    return proceedToPayment (orderId)
})
.then((PaymentInfo) => {
    console.log(PaymentInfo)
})
.catch((err) => {
    console.error(err.message)
})

function createOrder (cart) {
    return new Promise ((resolve, reject) => {
        //logic for creating a successful order
        const orderId = "12345"
        if (orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 5000)
        }
        //an error in creating th order
        if (!validateCart(cart)) {
            const err = new Error ("cart is not valid")
            reject(err)
        }
    })

    
}

function proceedToPayment(orderId) {
    return new Promise ((resolve, reject) => {
        resolve("Payment successful")
    })
}

function validateCart (cart) {
    return true
}

//Best Promise example
const myPromise1 = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    console.log(randomNumber)
    randomNumber > 0.5 ? resolve(randomNumber) : reject(new Error('Random number is too low'))
  }, 1000); // Simulating a delay of 1000 milliseconds (1 second)
});

//Handling the promise
myPromise1
  .then((result) => {
    console.log(`Promise fulfilled with result: ${result}`);
  })
  .catch((error) => {
    console.error(`Promise rejected with error: ${error}`);
  });

//async await | Namaste Javascript

const p = new Promise ((resolve,reject) => {
    let a = 1 + 1
    a===2 ? resolve("a is exactly two") : reject("a is not two")
})

async function getData () {
  //an async function will always return a promise irrgardless of the data structure its supposed to return.
  //If we return a string inside an async function then the string will be passed as a promise still.
  return p
}

const dataPromise = getData()

dataPromise.then((data) => {console.log(data)}).catch((error) => {console.error(error)})

//async and await combo is used to handle promises
const p1 = new Promise ((resolve, reject) => { 
  a = 1 + 1
  setTimeout (() => {
    a===2 ? resolve ("a is exactly two") : reject ("a is not two")
  }, 5000)
})

const p2 = new Promise ((resolve, reject) => { 
  a = 1 + 1
  setTimeout (() => {
    a===2 ? resolve ("a is exactly two") : reject ("a is not two")
  }, 10000)
})

//Handle the above promise using a normal function and not an async function
function getData () {
  //The javascript engine will not wait for the promise to be resolved but instead it will execute the next line of code in this case "Namaste Javascript" then execute the promise after 10000ms
 p1.then((result) => {console.log(result)}).catch((error) => {console.error(error)})
 console.log("Namaste Javascript")
}

getData()

//Handling the same promise using async await
//You have to use the keyword await infront of the promise that has to be handled
async function handlePromise () {
  console.log("Hello world")
  //await is a keyword that can only be used inside an async function
  const val = await p1 //At this point, the handlePromise function execution is suspended from the call stack until the promise is resolved.This means that the Javascript code does not stop and wait for the promise to be executed and resolved.
    console.log("Namaste Javascript") //The handlePromise function comes back into the callstack and continues with execution of the code line by line.
    console.log(val) //logs out the resolved promise after 10000ms
  const val2 = await p2
    console.log("Namaste Javascript 2")
    console.log(val2)
}
//Javascript is a single threaded language
handlePromise()

//Real world examples of async/await -> fetching apis
const API_URL = "https://api.github.com/users/Ge0frey"

async function handlePromise1 () {
  try {
    const response = await fetch(API_URL)

    const data = await response.json()

    console.log(data)

  } catch (err) {

    console.error(err)

  }
}
handlePromise1()


