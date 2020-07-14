function greeting(){
    console.log(`My name is ${this.name}, I am ${this.age}`);
}
var infor={
    name: 'Duc',
    age: 21
}
//https://nhungdongcodevui.com/2016/12/02/nhung-tro-vui-ve-voi-apply-call-va-bind-trong-javascript/
// https://completejavascript.com/phan-biet-call-apply-va-bind-trong-javascript
// https://anonystick.com/blog-developer/tips-javascript-truong-hop-nao-nen-su-dung-call-apply-va-bind-trong-javascript-2019080755001386?fbclid=IwAR0vLerS_bS48QNKfv0lreB8iB-bEaShZ6EG6lNF_8N-6c6JSic0pL9qMLY
greeting.call(infor);// call khac voi bind o cho: bind tra ve mot ham, va bat buoc goi = (). Con call thi goi ham do, va tra ve gia tri ma ham do tra ve