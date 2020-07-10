// spread trải đều các phần tử của mảng, rest gộp các phần tử vào 1 mảng
 var a=[1,2,3];
 var b=[0,...a,4];
//  console.log(b);
var x=3;
var z=5;
function ok(x){
    ++x;
    ++z;
    // console.log(x);
}

// ok(x);
// console.log(x);
// console.log(z);

// Shallow clone
var obj1={
    a:1,
    b:2,
    c: {d: 3}
}

var obj2={// kiểu copy này khi thay đổi obj2 thì obj1 cũng thay đổi, muốn không thay đổi dùng Deep clone
    ...obj1,
    e: 100
}

// Deep clone
var obj3={};
for(let key in obj1){
    obj3[key]=obj1[key];
}
// console.log(obj3)// khi thay đổi ọbj3 hoặc obj1 thì chúng không bị thay đổi theo

// 1 cách Deep clone khác xịn sò hơn

var obj4=JSON.parse(JSON.stringify(obj1));

obj4.c.d=5;
console.log(obj4);
console.log(obj1);// không bị thay đổi

const a = [1, 2, 3];
let b = [...a];
b[1] = 4;
console.log(b[1]); // 4
console.log(a[1]); // 2

// https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089