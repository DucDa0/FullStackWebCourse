/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
console.log('Start')
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];
const co=require('co');
const axios=require('axios');
function readUrlsPromise(path){
  return new Promise((resolve,reject)=>{
    axios.get(path).then(response=>resolve(response.data))
    .catch(err=>reject(err.error));
  })
}
// Cách 1: Sử dụng vòng lặp for

// let readUrls=co.wrap(function*(urls){
//   let data=[];
//   for(let val of urls){
//     data.push(yield readUrlsPromise(val));
//   }
//   return data;
// });

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise


let readUrls=co.wrap(function*(urls){
  let data= yield urls.map(url=>readUrlsPromise(url));
  return data;
});

readUrls(urls)
.then(data=>console.log(data))
.catch(error=>console.log(error));

console.log('End')