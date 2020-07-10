// https://viblo.asia/p/javascript-closures-PdbknoZLvyA
// https://viblo.asia/p/this-trong-javascript-gAm5ywe8Zdb
// https://coders-x.com/su-khac-biet-giua-function-va-block-scope-trong-javascript/
// function Mouse(name) {
//     this.name = name;
// }
// Mouse.prototype.eatDog = () => {
//     return this.name + ' eating ' + 'a dog';
// }
// const mickey = new Mouse('Mickey');
// const result = mickey.eatDog();
// console.log(result)

var obj={
    name:'name1',
    run: function(){
        console.log(this.name);
        var obj2={
            name2: 'nam2',
            run2: ()=>{
                console.log(this.name);
                var ob3={
                    name3: 'name3',
                    run3: function(){
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
    run: function(){
        console.log(this.name);
    }
}




