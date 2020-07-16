function sum(...numbers){
    console.log(numbers);
    return numbers.reduce((a,b)=>a+b);
}

console.log(sum(1,1,5,9));

function join(dot,...strings){
    return strings.join(dot);
}

console.log(join('.','a','b','c'));
console.log((join('.','a','b','c')).split(''));
console.log((join('.','a','b','c')).split('.'));
console.log((join('.','a','b','c')).split());
var str='daovanduc';
console.log(str.split(''));