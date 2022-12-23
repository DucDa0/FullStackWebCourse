// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n) {
    // viết code ở đây.
    return str.substr(0, n) + str.substr(str.length - n, n);
  }