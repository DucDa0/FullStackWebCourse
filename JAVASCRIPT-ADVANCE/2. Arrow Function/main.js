// https://coders-x.com/su-khac-biet-giua-function-va-block-scope-trong-javascript/
// https://codefun.dev/@lythanhnhan27294/tim-hieu-ve-arrow-functions-trong-javascript-es6-1482174216
// function Mouse(name) {
//     this.name = name;
// }
// Mouse.prototype.eatDog = () => {
//     return this.name + ' eating ' + 'a dog';
// }
// const mickey = new Mouse('Mickey');
// const result = mickey.eatDog();
// console.log(result)
//* Arrow function không có định nghĩa this, không có bind
var obj={
    name:'name1',
    run: function(){
        console.log(this.name);//* kết quả ra name1. Đối tượng con trỏ this tham chiếu tới là obj
        var obj2={
            name2: 'name2',
            run2: ()=>{
                console.log(this.name);//* kết quả ra name1. Đối tượng con trỏ this tham chiếu tới là obj, this.name2 sẽ undefined vì arrow function
                var ob3={
                    name3: 'name3',
                    run3: function(){
                        var name4='name4';
                        console.log(this.name3);
                        var c=()=>{
                            console.log(this.name3);
                        }
                        c();
                    }
                }
                ob3.run3();
            }
        }
        obj2.run2();
    }
}

obj.run();// xem tu hieu -_-

var test={
    name:'Duc',
    run: ()=>{
        console.log(this.name);
    }
}





