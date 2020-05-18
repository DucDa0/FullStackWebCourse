/**
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 */
function isPrimeNumber(x) {
    // viết code ở đây.
    var dem = 0;
    for (var i = 1; i <= x; ++i) {
      if (x % i === 0) {
        dem++;
      }
    }
    if (dem === 2) {
      return true;
    }
    return false;
  }