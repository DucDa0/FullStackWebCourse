// ===Lí thuyết=== //
/**
 * 1. Một số kiến thức bổ sung
 * - Array cũng có type là object, là một object đặc biệt, nó cũng có các property và method.
 * - Copy nông (shallow) và copy sâu (deep) chỉ áp dụng cho array hoặc object
 * + Shallow copy là copy một array/object sang một biến mới và không thay đổi tham chiếu của các giá trị bên trong array hoặc object
 * + Deep copy là copy toàn bộ các giá trị primitive bên trong array/object sang một biến mới
 * 2. Một số array methods phổ biến
 * - concat: nối hai hay nhiều mảng với nhau, trả về một mảng mới.
 * - findIndex: trả về index đầu tiên khi thỏa mãn điều kiện tìm kiếm
 * - includes: Kiểm tra mảng có chứa giá trị nào đó không, true hoặc false
 * - indexOf - Tìm vị trí của phần tử theo giá trị, nếu ko có trả về -1
 * - pop - Đẩy (pop) phần tử cuối ra khỏi mảng
 * - push - Thêm phần tử vào cuối mảng
 * - reverse - Đảo thứ tự các giá trị trong mảng, trả về 1 mảng mới, mảng cũ ko bị ảnh hưởng
 * - shift - Giống pop nhưng đẩy phần tử đầu ra
 * - unshift - Thêm phần tử vào đầu mảng
 * - slice - trả về một đoạn nhỏ trong mảng (Shallow copy vs. Deep copy  các giá trị)
 * - map - Ánh xạ các phần tử để tạo nên một array mới thông qua một transformer function, trả về mảng mới
 * - filter - Lọc theo điều kiện , trả về mảng
 * - find - Tìm theo điều kiện, trả về giá trị tìm được
 * - reduce - Biến đổi các giá trị trong mảng để trả về 1 giá trị duy nhất 
 */

var arr = [1, 2, 3];
var arrCopy = arr; // shallow copy
arrCopy[1] = 3;
console.log(arr); // [1, 3, 3]
console.log(arrCopy); // [1, 3, 3]


var arr = [1, 2, 3];
var arrCopy = []; // tạo tham chiếu mới, khác tham chiếu với arr
for (var i = 0; i < arr.length; i++) {
  arrCopy[i] = arr[i];
}
console.log(arrCopy); // [1, 2, 3]
arr[1] = 3;
console.log(arrCopy); // [1, 3, 3]
console.log(arr); // [1, 2, 3]


var students = [ // tham chiếu 0
    { name: 'S1' }, // tham chiếu 1
      { name: 'S2' }, // tham chiếu 2
      { name: 'S3' }  // tham chiếu 3
  ];
  var studentsCopy = []; // tạo tham chiếu mới, tham chiếu 4
  for (var i = 0; i < students.length; i++) {
    studentsCopy[i] = students[i];
  }
  console.log(studentsCopy);
  // [ // tham chiếu 4
  //   { name: 'S1' }, // tham chiếu 1
  //   { name: 'S2' }, // tham chiếu 2
  //   { name: 'S3' } // tham chiếu 3
  // ]
  studentsCopy[1].name = 'S3';
  console.log(students);
  console.log(studentsCopy);
// Hãy suy nghĩ xem dòng nào đang thực hiện shallow copy ở đoạn code trên==> Ở dòng 31 á mày
// Khi một array/object được deep copy sang một biến mới, 
// cho dù bạn mutate dữ liệu ở vị trí nào trong object mới thì cũng không ảnh hưởng đến object cũ.