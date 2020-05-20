var fs = require('fs');
var axios = require('axios');

// fs.readFile(
//   './data.json', 
//   { encoding: 'utf8'}, 
//   function(err, data) {
//     console.log('Data loaded from disk', data);

//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function(res) {
//         console.log('Data downloaded from url', res.data);
//       });
//   }
// );

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */
function readFilePromise(path){
  return new Promise((resolve,reject)=>{
    fs.readFile(path,{encoding:'utf8'},(err,data)=>{
      if(err){
        reject(err);
      }
      else{
        resolve(data);
      }
    });
  });
};
function readUrlPromise(path){
  return new Promise((resolve,reject)=>{
    axios.get(path).then(res=>resolve(res.data)).catch(err=>reject(err.error));
  });
}
async function Palladium(){
  let data1 = await readFilePromise('./data.json');
  let data2 = await readUrlPromise('https://jsonplaceholder.typicode.com/todos/1');
  console.log('Data loaded from disk', data1);
  console.log('Data downloaded from url', data2);
}

Palladium();