/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */
var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  function getObjectKey(obj, keys) {
    // Write code here...
    var arr
    if (typeof keys === 'undefined')
      arr = [];
    else
      arr = keys;
    for (var k in obj) {
      arr.push(k);
      if (typeof obj[k] === 'object')
        getObjectKey(obj[k], arr);
    }
    return arr;
  }