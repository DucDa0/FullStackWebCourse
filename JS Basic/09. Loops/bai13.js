/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */
function sum(x) {
    // viết code ở đây.
    var i = 1;
    var tong = 0;
    while (i < x) {
      if (i % 2 === 1) {
        tong += i;
      }
      ++i;
    }
    return tong;
  }