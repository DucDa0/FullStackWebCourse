/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */
function transform(arr) {
    // your code here
    var newArr = arr.map(function(a) {
      switch (a) {
        case 'A':
          a = 1;
          break;
        case 'a':
          a = 1;
          break;
        case 'B':
          a = 2;
          break;
        case 'b':
          a = 2;
          break;
        default:
          a = 0;
          break;
      }
      return a;
    });
    return newArr;
  }