/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */
console.log('Start');
var axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(response){
        console.log(response.data);
        return axios.get('https://jsonplaceholder.typicode.com/todos/2');
      })
      .then(function(response){
        console.log(response.data);
      })
      .catch(function(err){
        console.log(err.error)
      });

console.log('End');