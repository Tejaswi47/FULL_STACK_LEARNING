// LEVEL -1
// strngs
let str = "Hello world! I am Tejaswi   "

console.log(str.length);
console.log(str.slice(0,7));
console.log(str.slice(0,20));
console.log(str.lastIndexOf("Tejaswi"));
console.log(str.replace("Tejaswi", "Pratap"));
console.log(str.split(" "));
console.log(str.trim());
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Numbers
console.log(parseInt("42"));
console.log(parseInt("42px"));
console.log(parseInt("7.35162"));
console.log(parseFloat("42.8967532"));

// Arraty
const inital_arr = [1,2,3]
const second_arr = [4,5,6]

function logthing(thing) {
    console.log(thing);
}

console.log(inital_arr.concat(second_arr));
console.log(inital_arr.pop());
console.log(inital_arr.shift(0));
console.log(inital_arr.unshift(0));
inital_arr.forEach(logthing)


// LEVEL-2
// classes
class Animal{
    constructor(name, legcount, speaks){
        this.name = name;
        this.legcount = legcount;
        this.speaks = speaks;
    }
    speak(){
        console.log(`${this.name} makes a noise!!! like ${this.speaks}`);
    }
}
let dog = new Animal("dog", 4, "Bhow Bhow");
let cat = new Animal("cat", 4, "meow mew meow");

dog.speak();
cat.speak();

// Time related functions
const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getTime());


/* ASSIGNMENT
Write a function that calculates the time (in seconds) it takes for the js code to 
calculate sum from 1 to n , given n as the input
Try running it for 
1.) sum from 1-100
2.) sum from 1 - 100000
3.) sum from 1-1000000000
*/ 

function calculateSum(n){
    let a = 0;
    for (let i = 0; i < n; i++){
        a = a + i
    }
    return a;
}

const beforedate = new Date();
const beforeTimeinms = beforedate.getTime()

calculateSum(1000)

const afterdate = new Date();
const afterTimeinms = afterdate.getTime()

console.log(afterTimeinms - beforeTimeinms);

// JAVA SCRIPT OBJECT NOTATION(json)
// JSON.parse and JSON.stringify

