// console.log("Hello world!");

/*
    There are three ways to declare a variable.
    1. let  
    2. var 
    3. const --> declare for the constant varaibles
     
    The Datatypes are.
    1. Boolean
    2. stings
    3. booleans

    and if/else statements are same as the C++ and for loops is also same

    For loop
    let a = 100;
    for (let i = 0; i < a; i++) {
        console.log(i)
    }

*/

// Write a program to greet a person given their firstname and lastname
let firstname = "Tejaswi pratap";
let lastname = "Bodapati";
console.log(firstname + " " + lastname);

// write a program to greet a person based on their gender(if/else)
let gender = "Male";
if(gender=="Male"){
    console.log("hey goodmorning man!");
} else{
    console.log("hey goodmorning girllllll!");
}

// write a program that count from 0 - 1000 and prints(for loop)
let a = 0
for (i=0;i<=1000;i++){
    a = a + i;
}
console.log(a);

// write a program to print even number in an array
const ages = [1,2,3,4,5,6,7,8,9,10]
for (i = 0; i < ages.length; i++){
    if(ages[i]%2 == 0){
        console.log(ages[i]);
    }
}

// write a program to print biggest number in an arrays
let max_num = 0
const arr = [12,43,77,332,67,2123,88,10000]
const arr_lenght = arr.length
for(i=0; i<arr_lenght; i++){
    if (arr[i]>max_num){
        max_num = arr[i];
    }else{
        continue;
    }
}
console.log("The maximum number in the array is " + max_num);

// write a program that prints all the male people's firstname given a complex object
const allUsers = [
    {
        firstname: 'John',
        gender: 'male'
    },
    {
        firstname: 'tejaswi',
        gender: 'male'
    },
    {
        firstname: 'priya',
        gender: 'female'
    }
]
const allUsers_length = allUsers.length
for(let i=0; i<allUsers_length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstname"]);
    }
}


// write a program that reverses all the elements of an array  
const arr1 = [1,2,3,4,5,6,7,8,9,10]
let rev_arr=[]
const arr1_length = arr1.length
for(i=arr1_length-1; i>=0; i--){
    rev_arr.push(arr1[i]);
}
console.log(rev_arr);

// write a function that find the sum of two numbers
// write a another function that displays this result in a pretty format
// write a another function that takes this sum and prints it in passive tense
function findSum(a, b, fntocall){
    /* this function takes two arguments as an input and calculate the sum of two numbers  */
    result = a+b
    fntocall(result);

}

function displayResult(data){
    console.log("Result of the sum is " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is " + data);
}

// findSum(1,2, displayResult);

// Last assaignment for today
// create a counter in javascript(counts from 30 to 0)
// calculate the time it takes between a setTimeout call and the inner function actually running
// create a terminal clock (HH:MM:SS)
// setInterval(() => {}) this here is anonymous function, where we can create a action in the curly braces

function counter(value = 3600) {
    let SS = value;

    const intervalId = setInterval(() => {
        let HH = Math.floor(SS / 3600);
        let MM = Math.floor((SS % 3600) / 60);
        let seconds = SS % 60;

        console.log(`${String(HH).padStart(2, '0')}:${String(MM).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);

        SS--;

        if (SS < 0) {
            clearInterval(intervalId);  
        }
    }, 1000); 
}

counter();  




