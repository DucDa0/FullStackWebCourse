// * http://vuilaptrinh.com/2017-01-10-nam-vung-5-khai-niem-sau-xem-nhu-master-react/
// * https://www.codehub.vn/Lam-Quen-Voi-JSX-React#:~:text=JSX%20(vi%E1%BA%BFt%20t%E1%BA%AFt%20c%E1%BB%A7a%20c%E1%BB%A5m,createElement()%20trong%20React.
// * https://viblo.asia/p/props-va-state-trong-reactjs-naQZRYvqKvx
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
const arr =[1,2,3];
for(var i=0;i<arr.length;++i){
    setInterval(function(){
        console.log(i);
    },1000);

}
