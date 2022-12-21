// ===Lí thuyết=== //
/**
 * - Bất cứ function nào được truyền vào một function khác như một tham số và được gọi sau đó, thì gọi là callback function
 */

 /**
 * 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love Coders.Tokyo'
 * 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. Sau khi log xong, chạy hàm được truyền vào ở tham số
 * 3. Kiểm tra 2 hàm trên bằng cách: 
 *   countAndDo(sayHello)
 */

function sayHello() {
    console.log('I love Coders.Tokyo');
  }
  
  function countAndDo(callback) {
    for(var i=1;i<=10;++i){
      console.log(i);
    }
    callback();
  }
  
  countAndDo(sayHello);