/** 
 * * Ví dụ về sử lí sự kiện trong NodeJS dùng 2 module ulti và events.
 * * 
*/

const util = require('util');
const EventEmitter = require('events');

function BuySomethings(){
    this.products='Laptop';
}

util.inherits(BuySomethings,EventEmitter);// * Sử dụng method inherits để kế thừa các thuộc tính, medthod của module events

BuySomethings.prototype.info=function(price){
    console.log(`${this.products} is ${price}`);
    this.emit('pay', price);// * phát sự kiện
}

const buy = new BuySomethings();

buy.on('pay',function(price){// * Bắt sự kiện và xử lí
    console.log(`Buy completed! Your cart is ${price}`)
})

buy.info(20000);

//* Hàm dưới đây ví dụ cho việc kế thừa các thuộc tính của 1 đối tượng cha, sử dụng call để thay đổi context
function Happy(){
    BuySomethings.call(this);// * cái này sẽ kế thừa các thuộc tính của BySomeThings
    this.feeling='Very Good!';
}

util.inherits(Happy, BuySomethings);// * Kế thừa các phương thức, thuộc tính đc tạo ra từ prototype của thằng cha

const happy = new Happy();

happy.info(4000);