const axios = require('axios');

// Giải thích điểm khác nhau giữa 1 và 2:
// 1.
async function fetchUrls(urls) {
  const results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res);
  }
  return results;
}

// 2.
async function fetchUrlsParallel(urls) {
  const results = await Promise.all(
    urls.map(function(url) {
      return axios.get(url);
    })
  );
  return results;
}


// 1: Dùng vòng lặp, khai báo mảnng; 2: Dùng map, PromiseAll 

// Chạy thử 2 hàm trên với đầu vào dưới đây và so sánh tốc độ
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
];
console.time('Time 1');
fetchUrls(urls).then(()=> console.log('Done'));
console.timeEnd('Time 1');
console.time('Time 2');
fetchUrlsParallel(urls).then(()=> console.log('Done 2'));
console.timeEnd('Time 2');

// 2 is faster than 1.