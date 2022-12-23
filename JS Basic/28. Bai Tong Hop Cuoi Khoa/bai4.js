// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c) {
    // viết code ở đây.
    let max = (a > b & a > c) ? a : (b > a & b > c) ? b : c;
    return max;
  }