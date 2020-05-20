/* Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
*/
function pyString(String) {
    // viết code ở đây.
    if (String[0] === 'P' && String[1] === 'y') {
      return String;
    } else {
      return 'Py' + String;
    }
  }