// * http://vuilaptrinh.com/2017-01-10-nam-vung-5-khai-niem-sau-xem-nhu-master-react/
// * https://www.codehub.vn/Lam-Quen-Voi-JSX-React#:~:text=JSX%20(vi%E1%BA%BFt%20t%E1%BA%AFt%20c%E1%BB%A7a%20c%E1%BB%A5m,createElement()%20trong%20React.
// * https://viblo.asia/p/props-va-state-trong-reactjs-naQZRYvqKvx
// * https://viblo.asia/p/arrow-function-trong-reactcomponent-co-van-de-gi-L4x5xdBB5BM
//* 1. JSX
/**
 * *JSX (viết tắt của cụm từ JavaScript XML) là một loại cú pháp mở rộng dành cho ngôn ngữ JavaScript viết theo kiểu XML. 
 * *JSX cung cấp cú pháp ngọt (syntactic sugar) để thay cho câu lệnh React.createElement() trong React.
 */
// * 2. Ý nghĩa của props và state
/**
 * * Thành phần cơ bản của ReactJS là component. Component cho phép chúng ta chia nhỏ các thành phần UI độc lập mục đích để dễ quản lý
 * * và tái sử dụng nó. ReactJS kiểm soát luồng dữ liệu thông qua props và state. Dữ liệu trong states và props được sử dụng để render 
 * * ra các component với dữ liệu động (dynamic dữ liệu). 
 */
// * Props
/**
 * *props để gửi dữ liệu đến component
 * *Mọi component được coi là một hàm javascript thuần khiết (Pure Function)
 * *props tương đương với các tham số của hàm javascript thuần khiết
 * *Props là bất biến (không thể thay đổi được)
 * *
 */
// * State
/**
 * *State giống như một kho lưu trữ dữ liệu cho các component trong ReactJS. 
 * *Nó chủ yếu được sử dụng để cập nhật component khi người dùng thực hiện một số hành động như nhấp vào nút
 * *, nhập một số văn bản, nhấn một số phím, v.v.
 */
/**
 * * Bất cứ khi nào một lớp kế thừa lớp React.Component, hàm tạo (Constructor) của nó sẽ tự động gán thuộc tính state
 * * cho lớp với giá trị ban đầu được gán bằng null. Chúng ta có thể thay đổi nó bằng cách ghi đè hàm tạo (Constructor)
 */


 
// for(var i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
// }

for(let i=0;i<3;++i){
    if(i===3){
        console.log('ok')
    }
}
// console.log(i)