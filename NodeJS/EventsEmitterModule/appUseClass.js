const EventEmitter = require('events');

class BuySomeThings extends EventEmitter{
    constructor(){
        super()// * Kế thừa các phương thức, thuôc tính của Events
        this.products='Laptop';
    }
    info(price){
        console.log(`${this.products} is ${price}`);
        this.emit('pay', price);// * phát sự kiện
    }
}

const buy = new BuySomeThings();

buy.on('pay',function(price){
    console.log(`Buy completed! Your cart is ${price}`)
})

buy.info(2000);