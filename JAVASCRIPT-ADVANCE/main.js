//* ============= Con trỏ This ==============//
//* 1. Con trỏ this trong sử dụng hàm callback
const obj = {
    name: 'Dao Van Duc',
    sayHi: function () {
        console.log(this.name);
    }
}

function sayHiOutSide(cb) {// con trỏ this trong sử dụng call back
    cb();
}

sayHiOutSide(obj.sayHi);// kết quả ra undefined
sayHiOutSide(obj.sayHi.bind(obj));// kết quả ra Dao Van Duc

//* 2. Con trỏ this trong closure
/**
 * Khái niệm cơ bản closure: closure là một hàm con (inner function) nằm bên trong 1 hàm khác (outer function),
 * closure thì không thể truy cập tới con trỏ this của hàm cha (outer function)
 */
var user = {
    tournament: "The Masters",
    data: [
        { name: "T. Woods", age: 37 },
        { name: "P. Mickelson", age: 43 }
    ],

    clickHandler: function () {
        //Sử dụng con trỏ this ở đây thì OK, this đang mang giá trị tham chiếu tới đối tượng “user”
        this.data.forEach(function (person) {
            //Tuy nhiên, trong closure này thì this không còn tham chiếu tới đối tượng “user” nữa
            // Hàm inner function này không thể truy cập tới this của outer function

            console.log(person.name + " is playing at " + this.tournament);
        }.bind(this))

    }

}

user.clickHandler();
// results:
/**
 * T. Woods is playing at undefined
 * P. Mickelson is playing at undefined
 */
// ==> Có 5 cách fix như sau
// 1. truyền con trỏ this vào bind
// this.data.forEach(function (person) {
//     console.log(person.name + " is playing at " + this.tournament);
// }.bind(this))
// 2. truyền đối tượng user vào bind
// this.data.forEach(function (person) {
//     console.log(person.name + " is playing at " + this.tournament);
// }.bind(user))
// 3. khai tháo 1 biến that=this ^^
// var that=this
// this.data.forEach(function (person) {
//     console.log(person.name + " is playing at " + that.tournament);
// })
// 4. Sử dụng arrow function
// this.data.forEach((person) => {
//     console.log(person.name + " is playing at " + this.tournament);
// })
// 5. Truyền this vào callback của forEach
// this.data.forEach(function (person, this) {
//     console.log(person.name + " is playing at " + this.tournament);
// }.bind(this))


//* 3. Con trỏ this trong trường hợp gán hàm cho một biến khác
//Định nghĩa 1 đối tượng với phương thức hiển thị thuộc tính ra màn hình
var name = "Peter";
var Hocsinh = {
    name: "John",
    printName: function(){
        console.log(this.name);
    }
};

//Gán hàm Hocsinh.printName vào một biến
var printHocsinhName = Hocsinh.printName;

//Gọi hàm printHocsinhName để hiển thị tên học sinh
printHocsinhName();


//------> Kết quả
// Peter

//* 4. Con trỏ this trong hàm mượn (borrowing methods)
// Chúng ta có 2 đối tượng, 1 đối tượng có hàm computeAvg() và 1 đối tượng thì không
// Chúng ta sẽ thực hiện mượn hàm này
var gameController = {
    scores: [10, 15, 20],
    avgScore: null,
    players: [
        {name: "Tommy", playerID: 987, age: 23},
        {name: "Pau", playerID: 87, age: 33}
    ]
};

var appController = {
    scores: [30, 40, 50],
    avgScore: null,
    computeAvg: function () {      
       var sumOfScores = this.scores.reduce (function (prev, cur) {
           return prev + cur;
       });
       this.avgScore = sumOfScores / this.scores.length;
   }
};

/**
 * t muốn sử dụng hàm computeAvg cho đối tượng gameController để tính điểm trung bình,
 * thì phải làm thế lào, như lày, t dùng apply, thay đổi context của thằng computeAvg thành gameController
 * thay vì appController
 */

appController.computeAvg.apply(gameController);
console.log(gameController.avgScore);