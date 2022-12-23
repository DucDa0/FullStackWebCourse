/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    // viết code ở đây.	
    let charCode;
    let char;
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      charCode = str[i].charCodeAt(0);
      char = String.fromCharCode(charCode + 1);
      newStr += char;
    }
    return newStr;
  }