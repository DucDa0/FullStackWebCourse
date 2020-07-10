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

/**
 * Destructuring là 1 kỹ thuật được giới thuật trong ES6, giúp cho việc sao chép, trích xuất lại các variable 1 cách rất rõ ràng,
 * dễ hiểu hơn rất nhiều so với những cách thông thường khác và chắc chắn là loc (line of code) cũng giảm đi đáng kể.
 */