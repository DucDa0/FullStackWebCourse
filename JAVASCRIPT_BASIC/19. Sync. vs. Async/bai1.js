/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 * 
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */
console.time("Time this");

const request = require('request');
request('https://randomuser.me/api/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
});

console.timeEnd("Time this");

// http://tuyendung.misa.com.vn/tat-tan-tat-ve-dong-bo-bat-dong-bo-trong-javascript/
// https://medium.com/@giangcoffee/event-loop-l%C3%A0-g%C3%AC-v%C3%A0-ho%E1%BA%A1t-%C4%91%E1%BB%99ng-th%E1%BA%BF-n%C3%A0o-d52caa908090
// https://medium.com/vinid/hi%E1%BB%83u-v%E1%BB%81-b%E1%BA%A5t-%C4%91%E1%BB%93ng-b%E1%BB%99-trong-javascript-836c679eb93f
// https://toidicodedao.com/2017/10/10/async-await-trong-javascript/
// https://ehkoo.com/bai-viet/tat-tan-tat-ve-promise-va-async-await
// https://kipalog.com/posts/Co-ban-ve-async-await-trong-javascript