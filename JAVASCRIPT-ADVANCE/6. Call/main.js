function greeting(){
    console.log(`My name is ${this.name}, I am ${this.age}`);
}
var infor={
    name: 'Duc',
    age: 21
}
//https://nhungdongcodevui.com/2016/12/02/nhung-tro-vui-ve-voi-apply-call-va-bind-trong-javascript/
// https://completejavascript.com/phan-biet-call-apply-va-bind-trong-javascript
greeting.call(infor);// call khac voi bind o cho: bind tra ve mot ham, va bat buoc goi = (). Con call thi goi ham do, va tra ve gia tri ma ham do tra ve