// this is an async function
// there are settimeout 


console.log("hit there this is the first line of code");

function calculatesum(){
    let sum = 0;
    for (let i = 0; i <1000; i++) {
        sum = sum + i;
    }
    console.log("sum of first 1000 numbers are " + sum);
}

setTimeout(calculatesum, 1000);

console.log("Hi there this is the last line of the code");



