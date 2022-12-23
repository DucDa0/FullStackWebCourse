function callYourName(name) {
  return function getYourInfor(age) {
    console.log(`${name} is ${age}`);
  };
}

const infor = callYourName("Duc");
infor(21);
// https://viblo.asia/p/ban-nen-biet-closure-hoat-dong-nhu-the-nao-aWj53VQQl6m

function createCounter() {
  let count = 0;
  function increase() {
    return ++count;
  }
  return increase;
}

const count1 = createCounter();
const count2 = createCounter();

console.log(count1());
console.log(count1());
console.log(count1());

console.log(count2());
// Là hàm có thể ghi nhớ nơi nó được tạo ra và truy cập được biến ở bên ngoài phạm vi của nó
