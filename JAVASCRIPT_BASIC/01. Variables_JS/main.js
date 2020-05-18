// ===Lí thuyết=== //
// 1. Các khái niệm cơ bản
// + Sử dụng từ khoá var hoặc let để khai báo biến
// + Biến được dùng để lưu các giá trị tạm thời trong lúc tính toán, xử lý dữ liệu khi chương trình chạy
// +  Khi một biến được tạo ra nó sẽ chiếm một phần bộ nhớ trong RAM
// + Một biến chiếm bao nhiêu bộ nhớ quyết định bởi kiểu dữ liệu của biến và giá trị mà biến lưu trữ
// + Khi biến không được sử dụng nữa hoặc khi chương trình kết thúc thì bộ nhớ bị chiếm sẽ được giải phóng
// + Khi đã khai báo/định nghĩa biến mà không gán giá trị, giá trị của biến lúc đó là undefined
// 2. Các đặt tên biến
// + Tên biến không chứa dấu cách
// + Tên biến chỉ được phép bắt đầu bằng chữ cái, dấu _ hoặc dấu $
// + Tên biến chỉ có thể chứa chữ cái, chữ số, dấu _ hoặc dấu $
// + Tên biến có phân biệt chữ hoa chữ thường (porn khác với Porn)

//------------------//
// ===Bài tập=== //

// Khai báo 2 biến x, y nhận giá trị số bất kì
// Khai báo các biến sum, sub, mul, div lần lượt gán giá trị tổng, hiệu, tích, thương của x, y cho từng biến.
var x = 9;
var y = 6;
var sum = x + y;
var sub = x - y;
var mul = x * y;
var div = x / y;