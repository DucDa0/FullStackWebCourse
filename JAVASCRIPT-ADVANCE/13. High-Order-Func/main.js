const exchangeRate = {
    usd: {
        vnd: 23371,
        jpy: 107
    },
    vnd: {
        baht: 0.0014
    }
};

function exchange(amount) {
    // your code here
    var result;
    return {
        from: function(value1){
            var ok=exchangeRate[value1];
            return {
                to: function(value2){
                    result=ok[value2]*amount;
                    return result;
                }
            }
        }
    }
}
const usdToVndAmount = exchange(100).from('usd').to('vnd');
console.log(usdToVndAmount);
const vndToBahtAmount = exchange(10000).from('vnd').to('baht');
console.log(vndToBahtAmount);

//https://kipalog.com/posts/Callback-function-va-Higher-order-function-trong-Javascript