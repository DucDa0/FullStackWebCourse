const Cat={
    name: 'Den',
    bark: function(){
        console.log(this.name+' keu meo meo');
    }
}
// context cua bark() la Cat, this o day la Cat
Cat.bark();// In ra : Den keu meo meo

var Mouse={
    name: 'DO HOi'
}

var bark=Cat.bark.bind(Mouse);
// bark() co context la global context, this o day la global, khong co gia tri gi, la object rong
bark();// In ra: undefined keu meo meo, them bind voi truyen Cat vao lam this se in ra Den keu meo meo
console.log(this)


