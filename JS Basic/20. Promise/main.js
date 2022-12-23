/**
 * Trong JS, Promise thường được sử dụng đẻ get hay update dữ liệu
 * (****) Lưu ý: resolve và reject chỉ cho phép truyền đúng 1 param
 */
/**
 * *Promise là một cơ chế trong JavaScript giúp thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell hay pyramid of doom, 
 * *là tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng. Các tác vụ bất đồng bộ có thể là gửi AJAX request,
 * *gọi hàm bên trong setTimeout, setInterval hoặc requestAnimationFrame, hay thao tác với WebSocket hoặc Worker
 */
// * https://nhungdongcodevui.com/2017/02/12/javascript-promise-loi-hua-ngot-ngao-p1/
var request = require('request');

/**
 * Module `request` dùng để tải về 1 đường dẫn nào đó. Hãy thử chạy code để xem cách hoạt động
 */
console.log('Start fetching...');

request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
  if (error !== null) {
    console.log('error:', error); // Print the error
  }
  console.log('Done:', body);
});

console.log('Nothing');

/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 * Sau 30' không làm được thì có thể lên Slack hỏi
 */
console.log('Start')
var fs=require('fs');
function load(path)
{
  return new Promise(function(resolve,reject){
    request(path, function (error, response, body){
      if(error){
        reject(error);
      }else{
        resolve(body);
      }
    });
  });
}
load('https://jsonplaceholder.typicode.com/todos/1')
.then(function(body){
  console.log('Done:',body);
})
.catch(function(error){
  console.log(error);
})
console.log('End')


/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
console.log('Start')

const axios = require('axios');
function getData(path){
  return new Promise((resolve,reject)=>{
    axios.get(path)
      .then(function(response){
        resolve(response.data);
      })
      .catch(function(err){
        reject(err.error);
      })
  });
}

Promise.all([getData('https://jsonplaceholder.typicode.com/todos/1'),
getData('https://jsonplaceholder.typicode.com/todos/2'),
getData('https://jsonplaceholder.typicode.com/todos/3')
]).then(results=>console.log(results))
.catch(err=>console.log(err));

console.log('End')

// https://toidicodedao.com/2016/07/05/javascript-promise/