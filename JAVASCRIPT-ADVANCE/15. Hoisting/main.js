// This was hoisted, so it works
// returns 6
add(3, 3);
function add(num1, num2) {
  return num1 + num2;
}

// This was not, so it doesn't
// returns Uncaught TypeError: subtract is not a function
subtract(7, 4);
var subtract = function (num1, num2) {
  return num1 - num2;
};
/**
 * *Hoisting là hành động mặc định của Javascript, nó sẽ chuyển phần khai báo
 * *lên phía trên top của scope đó. Trong Javascript, một biến (variable) có thể được khai báo sau khi được sử dụng.
 * * const, let hoisting sẽ khác vs var, phần khai báo cũng được đưa lên top và lưu vào bộ nhớ, nhưng lại đc ưa vào Temporal Dead Zone nên sẽ ko sử dụng được
 */

//Lưu ý: Biến được khai báo với var & function declaration được khai báo trong code block sẽ được hoisted phần hàm trong chính block đó và hoisted tên hàm ra ngoài block.
// Ví dụ 1:
console.log(sum); // undefined

{
  sum(1, 2); // 3

  function sum(a, b) {
    return a + b;
  }
}

// Ví dụ 2:
sum(1, 2); // sum is not a function

{
  function sum(a, b) {
    return a + b;
  }
}
