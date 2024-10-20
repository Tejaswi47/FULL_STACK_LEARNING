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

// write a program that prints all the male people's firstname given a complex object

// write a program that reverses all the elements of an array  

