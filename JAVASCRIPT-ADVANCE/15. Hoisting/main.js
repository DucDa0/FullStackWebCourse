// This was hoisted, so it works
// returns 6
add(3, 3);
function add(num1, num2) {
	return num1 + num2;
};


// This was not, so it doesn't
// returns Uncaught TypeError: subtract is not a function
subtract(7, 4);
var subtract = function (num1, num2) {
	return num1 - num2;
};
/**
 * *Hoisting là hành động mặc định của Javascript, nó sẽ chuyển phần khai báo
 * *lên phía trên top Trong Javascript, một biến (variable) có thể được khai báo sau khi được sử dụng.
 */