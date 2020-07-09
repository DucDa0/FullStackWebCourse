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