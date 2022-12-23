/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */
//* https://daynhauhoc.com/t/ham-settimeout-trong-js/64457/4
//* https://daynhauhoc.com/t/ham-settimeout-trong-js/64457
//* https://viblo.asia/q/nho-giai-thich-gia-tri-bien-i-trong-doan-code-W65GWL2j5DO
function doSomeThing(){
    console.log('function called');
  }
  function doAfter(fn,x){
    setTimeout(fn,x);
  }
  doAfter(doSomeThing,3000);
  