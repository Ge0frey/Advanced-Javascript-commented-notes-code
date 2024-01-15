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





