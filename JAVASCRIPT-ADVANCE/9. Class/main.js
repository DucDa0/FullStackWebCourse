// Class
//*Đối với class thì sẽ không có khái niệm hoisting như function
class Bike {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }
    setSpeed(x) {
        this.speed = x;
        return this;
    }
    run() {
        return 'Running with speed ' + this.speed;
    }
}
// Prototype
function BikeCopy(model, speed) {
    this.model = model;
    this.speed = speed;
}
BikeCopy.prototype.run = function () {
    return 'Running with speed ' + this.speed;
}
BikeCopy.prototype.setSpeed = function (x) {
    this.speed = x;
    return this;
}

// https://kipalog.com/posts/Tim-hieu-ve-class-trong-Javascript

var bike = new BikeCopy('Yamaha', 10);

// Class Inheritance
// https://completejavascript.com/ke-thua-co-ban-trong-javascript

//Tạo ra 1 hàm khởi tạo cơ sở (tựa như lớp cơ sở)
function Animal(_age){
    this.age = _age;
 }
  
 //Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
 Animal.prototype.showAge = function(){
    console.log( this.age );
 };
  
 //Tạo ra 1 hàm khởi tạo con (sẽ dùng để kế thừa lớp cơ sở)
 function Bird(_color){
    this.color = _color;
 }
 //Thực hiện kế thừa, gán hàm khởi tạo của Animal cho prototype của Bird
 Bird.prototype = new Animal();
 Bird.prototype.showColor = function(){
    console.log( this.color );
 };
  
 //Kiểm tra sự kế thừa
 var eagle = new Bird('red');
 eagle.age = 5;
 eagle.showAge();       //5
 eagle.showColor();     //red

