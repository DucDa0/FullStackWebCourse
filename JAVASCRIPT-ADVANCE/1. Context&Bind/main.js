const Cat={
    name: 'Den',
    bark: function(){
        console.log(this.name+' keu meo meo');
    }
}
// context cua bark() la Cat, this(hay con trỏ this) o day la Cat
Cat.bark();// In ra : Den keu meo meo

var Mouse={
    name: 'DO HOi'
}
// https://nhungdongcodevui.com/2016/11/18/dung-con-tro-this-trong-javascript-the-nao-cho-dung/
// https://coders-x.com/execution-context-va-execution-stack-trong-javascript/
// http://ryanmorr.com/understanding-scope-and-context-in-javascript/
Cat.bark.bind(Mouse)();
// bark() co context la global context, this o day la global, khong co gia tri gi, la object rong
//bark();// In ra: undefined keu meo meo, them bind voi truyen Cat vao lam this se in ra Den keu meo meo

/**
 * * Mỗi khi một execution context được tạo nên nó sẽ được đưa vào top của execution stack,
 * * Trình duyệt sẽ luôn thực thi execution context hiện tại nằm trên đỉnh(top) của execution stack,
 * * Sau khi hoàn thành, nó sẽ bị lấy ra khỏi đỉnh stack và trả về execution context dưới nó
 */
