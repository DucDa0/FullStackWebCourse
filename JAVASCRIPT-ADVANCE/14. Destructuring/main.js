const exchangeRate = {
    usd: {
        vnd: 25000
    }
}
const exchange = ({ amount = 100, from, to }) => exchangeRate[from][to] * amount;
const exchangeClone=function(obj){
    // var {amount,from,to}=obj;
    var arr=Object.keys(obj);
    return exchangeRate[obj[arr[1]]][obj[arr[2]]]*obj[arr[0]];
}
// declare a function or variable exchangeClone doing the same thing in ES5
const result = exchangeClone({
    amount: 2,
    from: 'usd',
    to: 'vnd'
});
console.log(result);

// https://coders-x.com/destructuring-in-javascript-phan-1/
// https://coders-x.com/destructuring-in-javascript-phan-2/
// https://anonystick.com/blog-developer/destructuring-javascript-la-gi-buong-gi-buong-chu-dung-bo-qua-phan-nay-cua-es6-2019122141422037
// https://giaphiep.com/blog/tim-hieu-ve-destructuring-trong-es6-1097

/**
 * Destructuring là 1 kỹ thuật được giới thuật trong ES6, giúp cho việc sao chép, trích xuất lại các variable 1 cách rất rõ ràng,
 * dễ hiểu hơn rất nhiều so với những cách thông thường khác và chắc chắn là loc (line of code) cũng giảm đi đáng kể.
 * 
 */

 // Destructuring dùng với object literial
var foo = { bar: 'pony', baz: 3 }
var {bar, baz} = foo
console.log(bar)
// <- 'pony'
console.log(baz)
// <- 3

var foo = { bar: 'pony', baz: 3, foo: 'trump' }
var {bar: a, baz: b} = foo
console.log(a)
// <- 'pony'
console.log(b)
// <- 3

var foo = { bar: { deep: 'pony', dangerouslySetInnerHTML: 'lol' } }
var {bar: { deep, dangerouslySetInnerHTML: sure }} = foo
console.log(deep)
// <- 'pony'
console.log(sure)
// <- 'lol'

// Destructuring dùng với array
let [a, b] = [1, 2]
console.log(a)
// <- 1
console.log(b)
// <- 2