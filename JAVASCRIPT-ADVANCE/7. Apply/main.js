function sum(){
    const numbers=Array.from(arguments);
    return numbers.reduce((a,b)=>a+b);
}

function average(){
    const s = sum.apply(null, arguments);
    return s/arguments.length;
}

console.log(average(1,2,4,5))