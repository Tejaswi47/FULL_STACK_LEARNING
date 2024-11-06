//map, filter and arrow fns


//------------arrow

const sum = (a,b) => {
    return a+b;
}

const result = sum(10,20)
console.log(result)


//--------------map

const input = [1,2,3,4,5,6,7,8,9];

const ans = input.map(function (i){
    return i * 2;
});

console.log(ans)

//--------------filter

const arr = [1,2,3,4,5,6,7,8,9];

function filterlogic(n) {
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const filtered_arr = arr.filter(filterlogic);
console.log(filtered_arr)
