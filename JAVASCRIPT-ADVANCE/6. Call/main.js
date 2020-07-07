function greeting(){
    console.log(`My name is ${this.name}, I am ${this.age}`);
}
var infor={
    name: 'Duc',
    age: 21
}

greeting.call(infor);