function Cat(name, age){
    this.name=name;
    this.age=age;
    this.showInfo=function(){
        console.log(`${this.name} is ${this.age}`);
    }
};

const tom =new Cat('Tom',21);
tom.proto.prototype=5;
console.log(tom)