// ===Lí thuyết=== //
// 1. Các kiến thức căn bản
// + JS là ngôn ngữ Dynamically typed(kiểu động), chỉ cần var khai báo kiểu dữ liệu nào cũng được hết
// 2. Các kiểu dữ liệu
// - Primitive types:
//      + Number(kiểu số): có các giá trị đặc biệt như infinity, -infinity, NaN(not a number) - ('abc'/2-->NaN)
//      + String(kí tự, chuỗi)
//      + Boolean(kiểu logic): có 2 giá trị là true hoặc false
//      + BigInt: lưu các giá trị lớn hơn 2^53 chữ số, muốn tạo biến có kiểu này thì thêm 'n' vào cuối
// - Special types:
//      + undefined: không xác định, thường thì khi định nghĩa mà không gán giá trị sẽ gặp kiểu này
//      + null: hiểu đơn giản là rỗng
// - Reference Types
//      + Array
//      + Object
// - Kiểu symbol: được dùng để tạo ra các giá trị unique (có tính duy nhất), dùng để làm ID cho các object khác.
//      + Ví dụ:
/**
 * var id = Symbol();
 * var anotherId = Symbol('696');
 */

//------------------//

// ===Bài tập=== //

/**
 * Sử dụng các kiến thức đã học trong bài khai báo các biến mô tả một người, vật nào đó mà bạn thích
 * Ví dụ dưới đây mô tả thời tiết ngày hôm nay
 *  var today = 'Sunday';
 *  var isCloudy = true;
 *  var currentTemperature = 30;
 *
 * fullName có kiểu dữ liệu là string;
 * age có kiểu dữ liệu là number;
 * isMale có kiểu dữ liệu là boolean;
 */
var fullName='Đào Văn Đức';
var age=21; 
var isMale=true;