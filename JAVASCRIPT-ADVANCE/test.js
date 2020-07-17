const obj = {a:1,b:2,c:3};

const clone = {...obj};

clone.a=8;
console.log([obj,clone]);