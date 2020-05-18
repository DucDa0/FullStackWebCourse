// ===Lí thuyết=== //
/**
 * 1. Hàm
 * - Hiểu như vầy: function nó như là 1 khổi lệnh, thực hiện 1 công việc nào đó, và trả về 1 kết quả nhất định
 * 2. Phạm vi của biến(Scope)
 * - Local variable
 * - Global variable
 * - Variable shadowing
 * 2. Tham số đầu vào
 * - Khi tham số đầu vào là một primitive, giá trị đó sẽ được copy và gán cho biến đầu vào.
 *  khithay đổi giá trị của biến đầu vào, giá trị bên ngoài không bị ảnh hưởng.
 * - Khi tham số đầu vào là một object, reference (tham chiếu) tới object đó sẽ được copy và gán vào
 * biến đầu vào. Khi bạn thay đổi các property của object, biến bên ngoài cũng bị thay đổi theo. 
 * 3. Số tham số đầu vào khác với số giá trị truyền vào
 * - Trường hợp 1: Truyền vào nhiều giá trị hơn
 * Trong mỗi hàm khi được gọi luôn có một biến được tạo ra có tên là arguments chứa các giá trị truyền vào. 
 * Biến đặc biệt này có dạng Array-like object 
 * - Trường hợp 2: Truyền vào ít giá trị hơn
 * Do a là tham số đầu tiên nên a sẽ nhận giá trị được truyền vào đầu tiên là 3,
 * b không được truyền giá trị nên sẽ nhận giá trị mặc định là undefined
 * 4. Mở rộng thêm
 * - Khi biến mang giá trị là một function thì nó cũng có thể được gọi như function.
 * Do function cũng là giá trị nên có thể gán được cho biến
 * - Function có thể không có tên
 * Function không có tên được gọi là anonymous function. 
 * - IIFE (Immediately invoked function expression)
 * Hàm không tên được bao bởi ngoặc tròn (function() {...}) và được gọi ngay sau đó () (2 dấu ngoặc cuối cùng).
 * 5. Pure function
 * - Với bất kì đầu vào giống nhau thì giá trị đầu ra cũng giống nhau (hay còn gọi là determenistic function)
 * - Hàm không có side-effects (hiệu ứng phụ): Khi một function thay đổi, tương tác với những thứ bên ngoài nó thì được coi là có side-efects (hiệu ứng phụ).
 * Có các side effect như:
 * + Mutate tham số đầu vào:
 * Khi tham số đầu vào là một object, việc thay đổi các property của object đầu vào người ta gọi là mutate tham số đầu vào.
 * Có thể hiểu mutate như là thay đổi các giá trị nội tại của một object.
 * Vô hình chung, khi mutate một giá trị đầu vào, chúng ta đang thay đổi một giá trị ở bên ngoài hàm.
 * Trong thực tế khi thiết kế hệ thống người ta tránh mutate giá trị bên ngoài vì với hệ thống lớn, 
 * nhiều hàm cùng mutate một object bên ngoài thì sẽ dẫn đến trường hợp khó tìm ra lỗi.
 * + Sử dụng console.log
 * + Gọi network request
 * + Đọc ghi vô disk
 * + Thay đổi giá trị các biến nằm ngoài hàm
 * - Lợi ích của Pure function:
 * + Dễ test (sẽ nhắc lại ở bài về Unit testing)
 * + Dễ tìm lỗi (debug) khi có bug
 * + Dễ đoán kết quả của chương trình
 * 6. Built-in functions
 * - Hàm đã được gây dựng sẵn
 */
// ví dụ về Variable shadowing
var result = 0;
function sum(a, b) {
  var result; // thêm var vô
  result = a + b;
  return result;
}
// sum(2, 3);
// console.log(result);
//Khi một biến được truy xuất, biến được khai báo trong hàm sẽ được ưu tiên sử dụng,
// nếu không có thì biến ngoài hàm sẽ được sử dụng. Trong ví dụ trên người ta nói biến result
// ở ngoài hàm bị biến result trong hàm che khuất (shadowing)


// Ví dụ mở rộng
function sum(a, b) {
    return a + b;
  }
  var add = sum;
  console.log(add(1, 2));


  (function(a, b) {
    console.log(a + b);
  })(1, 2);