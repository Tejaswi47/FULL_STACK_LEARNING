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

// -------------------------------------------------------------------------------------

function pratapcalculate(){
    return new Promise(function(resolve){
        let sum = 0;
        for(let i=0; i<1000000;i++) {
            sum = sum + i
        }
        resolve(sum);
    });
}

function onThen(data){
    console.log("The total sum for 1000 numbers is " + data);
}

pratapcalculate().then(onThen);


// -------------------------------------------------------------------------------------

async function pratapcalculateversion2(){
    let sum = 0;
    for(let i=0; i< 10; i++){
        sum = sum + i;
    }
    return sum;
}

async function main(){
    const sum_v2 = await pratapcalculateversion2();
    console.log("The total sum for 10 numbers is " + sum_v2);
}

main();